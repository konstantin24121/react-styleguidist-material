import React from 'react';
import PropTypes from 'prop-types';

import { Title } from 'sg/components';
import { SidebarToggle } from 'sg/compounds';
import { FontSettings } from 'sg/containers';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import { Root, Grid, HeaderTitle } from './HeaderStyled';

const Header = ({ title, sidebarIsOpen, onToggle, device }) => {
  return (
    <Root>
      <Grid>
        <div>
          <SidebarToggle onToggle={onToggle} isOpen={sidebarIsOpen} />
        </div>
        <div>
          <HeaderTitle>
            <Title size={5} withoutMargin>{title}</Title>
          </HeaderTitle>
        </div>
        {device.matchDevice('HANDHOLD') && (
          <div>
            <FontSettings />
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
  device: PropTypes.any.isRequired,
};

Header.defaultProps = {
  onToggle: () => {},
};

export default withDeviceType(Header);
