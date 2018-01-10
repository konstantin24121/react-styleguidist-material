import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './PreviewErrorStyled';

const PreviewError = ({ message }) => (
  <Root>{message}</Root>
);

PreviewError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PreviewError;
