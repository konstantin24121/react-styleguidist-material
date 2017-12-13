import React from 'react';
import PropTypes from 'prop-types';
import { Code, Markdown } from 'rsg-components';
import Group from 'react-group';
import { unquote, getType, showSpaces } from './util';

import s from './Props.css';


function renderEnum(prop) {
  if (!Array.isArray(getType(prop).value)) {
    return <span>{getType(prop).value}</span>;
  }

  const values = getType(prop).value.map(({ value }) => (
    <Code key={value}>{showSpaces(unquote(value))}</Code>
  ));
  return (
    <span><span className={s.name}>One of:</span> <Group separator=", " inline>{values}</Group></span>
  );
}

function renderUnion(prop) {
  if (!Array.isArray(getType(prop).value)) {
    return <span>{getType(prop).value}</span>;
  }

  const values = getType(prop).value.map((value) => (
    <Code key={value.name} className={s.type}>{renderType(value)}</Code>
  ));
  return (
    <span><span className={s.name}>One of type:</span> <Group separator=", " inline>{values}</Group></span>
  );
}

function renderShape(props) {
  const rows = [];
  for (const name in props) {
    const prop = props[name];
    const defaultValue = renderDefault(prop);
    const description = prop.description;
    rows.push(
      <div key={name}>
        <Code className={s.name}>{name}</Code>{': '}
        <Code className={s.type}>{renderType(prop)}</Code>
        {defaultValue && ' — '}{defaultValue}
        {description && ' — '}
        {description && <Markdown text={description} inline />}
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
      {description && <Markdown text={description} inline />}
      <br />
      {extra}
    </Group>
  );
}

function renderRows(props) {
  const rows = [];
  for (const name in props) {
    const prop = props[name];
    rows.push(
      <tr key={name}>
        <td className={s.cell}><Code className={s.name}>{name}</Code></td>
        <td className={s.cell}><Code className={s.type}>{renderType(getType(prop))}</Code></td>
        <td className={s.cell}>{renderDefault(prop)}</td>
        <td className={`${s.cell} ${s.cellDesc}`}>{renderDescription(prop)}</td>
      </tr>,
    );
  }
  return rows;
}

export default function PropsRenderer({ props }) {
  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.cellHeading}>Name</th>
            <th className={s.cellHeading}>Type</th>
            <th className={`${s.cellHeading} ${s.cellHeading_wide}`}>Default</th>
            <th className={`${s.cellHeading} ${s.cellDesc}`}>Description</th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {renderRows(props)}
        </tbody>
      </table>
    </div>
  );
}

PropsRenderer.propTypes = {
  props: PropTypes.object.isRequired,
};
