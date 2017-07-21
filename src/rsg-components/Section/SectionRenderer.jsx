import React from 'react';
import PropTypes from 'prop-types';

const s = require('./Section.css');

const SectionRenderer = ({ name, content, components }) => (
  <div className={s.root}>
    <header className={s.header}>
      <h1 className={s.heading}>
        <div className={s.anchor} id={name} />
        {name}
        <a className={s.anchorLink} href={`#${name}`}>#</a>
      </h1>
    </header>
    <div>
      {content}
    </div>
    <div>
      {components}
    </div>
  </div>
);

SectionRenderer.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.node,
  components: PropTypes.object, // eslint-disable-line
};

SectionRenderer.defaultProps = {
  content: null,
};

export default SectionRenderer;
