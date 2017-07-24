import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

import s from './TableOfContents.css';

const TableOfContentsRenderer = ({ items, searchTerm, onSearchTermChange }) => (
  <div>
    <div className={s.root}>
      <div className={s.filter}>
        <TextField
          value={searchTerm}
          hintText="Filter by name"
          onChange={(event) => onSearchTermChange(event.target.value)}
          style={{ width: '100%' }}
        />
      </div>
      {items}
    </div>
  </div>
);

TableOfContentsRenderer.propTypes = {
  items: PropTypes.node.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};

export default TableOfContentsRenderer;
