import React from 'react';
import Group from 'react-group';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { Monotype, P } from 'sg/components';
import { Required, Name, Default, Extra, rowStyles } from './PropTypesStyled';
import { unquote, getType } from './util';

function renderType(type) {
  if (!type) {
    return 'unknown';
  }
  const { name } = type;
  switch (name) {
    case 'arrayOf':
      return `${type.value.name}[]`;
    case 'instanceOf':
      return type.value;
    default:
      return name;
  }
}

function renderDefault(prop) {
  const type = getType(prop);
  if (type.name === 'bool' && prop.defaultValue) {
    return unquote(prop.defaultValue.value);
  }
  return '';
}

function renderEnum(prop) {
  if (!Array.isArray(getType(prop).value)) {
    return <span>{getType(prop).value}</span>;
  }

  const values = getType(prop).value.map(({ value }) => unquote(value));
  return (
    <span>One of: <Monotype inline><Group separator=", " inline>{values}</Group></Monotype></span>
  );
}

function renderUnion(prop) {
  if (!Array.isArray(getType(prop).value)) {
    return <span>{getType(prop).value}</span>;
  }

  const values = getType(prop).value.map((value) => renderType(value));
  return (
    <span>One of type: <Monotype inline><Group separator=", " inline>{values}</Group></Monotype></span>
  );
}

function renderShape(props) {
  const rows = [];
  for (const name in props) {
    const prop = props[name];
    rows.push(
      <div key={name}>
        <Monotype smallLine inline>{name}</Monotype>{': '}
        <Monotype smallLine inline>{renderType(prop)}</Monotype>
      </div>,
    );
  }
  return rows;
}

function renderExtra(prop) {
  const type = getType(prop);

  if (!type) {
    return null;
  }
  switch (type.name) {
    case 'enum':
      return renderEnum(prop);
    case 'union':
      return renderUnion(prop);
    case 'shape':
      return renderShape(prop.type.value);
    case 'arrayOf':
      if (type.value.name === 'shape') {
        return renderShape(prop.type.value.value);
      }
      return null;
    default:
      return null;
  }
}

function renderDescription(prop) {
  const { description } = prop;
  const extra = renderExtra(prop);
  return (
    <Group>
      <P key="descr" smallLine>{description}</P>
      {extra && <P key="extra" smallLine><Extra>{extra}</Extra></P>}
    </Group>
  );
}

const renderTableData = (props) => {
  const propsKeys = Object.keys(props);
  const rows = [];

  for (let i = 0; i < propsKeys.length; i += 1) {
    const propKey = propsKeys[i];
    const row = props[propKey];

    rows.push((
      <TableRow key={propKey}>
        <TableRowColumn style={{ width: '150px', ...rowStyles }}>
          <Monotype smallLine>
            <Name>{row.required ? <Required>{propKey} *</Required> : propKey}</Name>
          </Monotype>
        </TableRowColumn>
        <TableRowColumn style={{ width: '100px', ...rowStyles }}>
          <Monotype smallLine>{renderType(getType(row))}</Monotype>
        </TableRowColumn>
        <TableRowColumn style={{ width: '100px', ...rowStyles }}>
          <Monotype smallLine>
            <Default>
              {renderDefault(row)}
            </Default>
          </Monotype>
        </TableRowColumn>
        <TableRowColumn
          style={{ width: '450px', overflow: 'none', whiteSpace: 'normal', ...rowStyles }}
        >
          {renderDescription(row)}
        </TableRowColumn>
      </TableRow>
    ));
  }
  return rows;
};

export default renderTableData;
