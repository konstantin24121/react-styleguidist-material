import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { Root, applyGlobalStyles } from './RootStylesStyled';

const nightCss = `
  html { filter: invert(100%); background: #fefefe; }
  img:not([src*=".svg"]), video { filter: invert(100%) }
`;

const RootStyles = ({ children, mod, theme }) => {
  applyGlobalStyles({
    theme,
    mod,
  });
  return (
    <Root mod={mod}>
      {children}
      <style media={mod === 'night' ? 'screen' : 'none'}>
        {nightCss}
      </style>
    </Root>
  );
};

RootStyles.propTypes = {
  mod: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  theme: PropTypes.any.isRequired,
};

const mapStateToProps = (store) => ({
  mod: store.ui.mod,
});

export default connect(mapStateToProps)(withTheme(RootStyles));
