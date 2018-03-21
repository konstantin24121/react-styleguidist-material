import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { withTheme } from 'styled-components';
import { trackStyle, thumbStyle } from './ScrollableStyled';

const Scrollable = ({ children, style, theme }) => (
  <Scrollbars
    style={style}
    renderTrackVertical={
      (props) => <div {...props} style={{ ...props.style, ...trackStyle({ theme }) }} />
    }
    renderThumbVertical={
      (props) => <div {...props} style={{ ...props.style, ...thumbStyle({ theme }) }} />
    }
    autoHide
  >
    {children}
  </Scrollbars>
);

Scrollable.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default withTheme(Scrollable);
