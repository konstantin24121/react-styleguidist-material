import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'sg/components';
import { Root, Grid } from './HeaderStyled';

const Header = ({ title }) => {
  return (
    <Root>
      <Grid>
        <div>{ /*icon sidebar*/ }</div>
        <div>
          <Title size={5} withoutMargin>{title}</Title>
        </div>
        <div>{ /*custom*/ }</div>
      </Grid>
    </Root>
  );
};

Header.propTypes = {
  /**
   * Styleguide title
   */
  title: PropTypes.string.isRequired,
};

export default Header;
