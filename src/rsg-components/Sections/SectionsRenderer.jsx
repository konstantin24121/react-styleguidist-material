import React from 'react';
import PropTypes from 'prop-types';

const SectionsRenderer = ({ sections }) => (
  <div>
    {sections}
  </div>
);

SectionsRenderer.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default SectionsRenderer;
