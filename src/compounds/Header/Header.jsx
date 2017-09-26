import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'sg/components';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import TextFormatIcon from 'material-ui/svg-icons/content/text-format';
import { withTheme } from 'styled-components';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import { Root, Grid, HeaderTitle } from './HeaderStyled';

const Header = ({ title, sidebarIsOpen, theme, onToggle, device }) => {
  return (
    <Root>
      <Grid>
        <div>
          <IconButton onClick={onToggle}>
            {!sidebarIsOpen && <MenuIcon color={theme.colors.typoInverted} />}
            {sidebarIsOpen && <CloseIcon color={theme.colors.typoInverted} />}
          </IconButton>
        </div>
        <div>
          <HeaderTitle>
            <Title size={5} withoutMargin>{title}</Title>
          </HeaderTitle>
        </div>
        {device.matchDevice('HANDHOLD') && (
          <div>
            <IconButton>
              <TextFormatIcon color={theme.colors.typoInverted} />
            </IconButton>
          </div>
        )}
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
   * Sidebar is open?
   */
  sidebarIsOpen: PropTypes.bool.isRequired,
  /**
   * Connected
   */
  theme: PropTypes.any.isRequired,
  device: PropTypes.any.isRequired,
};

Header.defaultProps = {
  onToggle: () => {},
};

export default withTheme(withDeviceType(Header));
