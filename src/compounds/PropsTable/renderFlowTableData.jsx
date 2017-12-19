import React from 'react';
import Group from 'react-group';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { Monotype, P } from 'sg/components';
import { Required, Name, Extra, rowStyles } from './PropTypesStyled';
import { unquote, getType } from './util';

function renderType(type) {
  if (!type) {
    return 'unknown';
  }

  const { name, raw, elements } = type;
  const signatureType = type.type;

  switch (name) {
    case 'Array':
      return `${raw.match(/<(.*)>/)[1]}[]`;
    case 'union': {
      const literals = elements.filter((value) => value.name === 'literal');
      if (literals.length === elements.length) {
        return 'enum';
      }
      return name;
    }
    case 'signature':
      return signatureType;
    default:
      return name;
  }
}

function renderDefault(prop) {
  const type = getType(prop);
  if (type.name === 'Array' || type.name === 'signature') return '';
  if (prop.defaultValue) {
    return unquote(prop.defaultValue.value);
  }
  return '';
}

function renderEnum(elements) {
  const values = elements.map(({ value }) => unquote(value));

  return (
    <span>One of: <Monotype inline><Group separator=", " inline>{values}</Group></Monotype></span>
  );
}

function renderUnion(elements) {
  const values = elements.map((value) => renderType(value));
  return (
    <span>One of type: <Monotype inline><Group separator=", " inline>{values}</Group></Monotype></span>
  );
}


function renderShape(signature) {
  return signature.properties.map(({ key, value }) => {
    const realKey = key.name || key;
    return (
      <div key={realKey}>
        <Monotype smallLine inline>{realKey}</Monotype>{': '}
        <Monotype smallLine inline>{renderType(value)}</Monotype>
      </div>
    );
  });
}

function renderFunc(signature) {
  const values = signature.arguments.map(({ name, type }) => (
    <div key={name}>
      <Monotype smallLine inline>{name}</Monotype>{': '}
      <Monotype smallLine inline>{renderType(type)}</Monotype>
    </div>
  ));
  return (
    <span>
      <b>Arguments:</b><br />
      {values}
      <b>Return:</b><br />
      <Monotype smallLine inline>{signature.return.name}</Monotype>
    </span>
  );
}

function renderExtra(prop) {
  const type = getType(prop);

  if (!type) {
    return null;
  }
  const { elements, signature } = type;

  switch (type.name) {
    case 'union': {
      const literals = elements.filter((value) => value.name === 'literal');
      if (literals.length === elements.length) {
        return renderEnum(elements);
      }
      return renderUnion(elements);
    }
    case 'signature': {
      if (type.type === 'function') {
        return renderFunc(signature);
      }
      if (type.type === 'object') {
        return renderShape(signature);
      }
      return null;
    }
    case 'Array': {
      if (elements[0].type === 'object') {
        return renderShape(elements[0].signature);
      }
      return null;
    }
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
      {extra && <Extra smallLine key="extra">{extra}</Extra>}
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
            {renderDefault(row)}
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
