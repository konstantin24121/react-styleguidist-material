import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'sg/components';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { withTheme } from 'styled-components'
import { Root, Grid, HeaderTitle } from './HeaderStyled';

const Header = ({ title, theme, onToggle }) => {
  return (
    <Root>
      <Grid>
        <div>
          <IconButton onClick={onToggle}>
            <MenuIcon color={theme.colors.typoInverted} />
          </IconButton>
        </div>
        <div>
          <HeaderTitle>
            <Title size={5} withoutMargin>{title}</Title>
          </HeaderTitle>
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
  /**
   * Fired when user click on sidebar toogle button
   */
  onToggle: PropTypes.func,
  /**
   * Connected
   */
  theme: PropTypes.any.isRequired,
};

Header.defaultProps = {
  onToogle: () => {},
};

export default withTheme(Header);
