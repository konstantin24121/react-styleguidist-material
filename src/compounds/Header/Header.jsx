import React from 'react';
import PropTypes from 'prop-types';

import { Title } from 'sg/components';
import { SidebarToggle } from 'sg/compounds';
import { FontSettings } from 'sg/containers';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import { withRouter } from 'react-router';
import { Root, Grid, HeaderTitle } from './HeaderStyled';

const Header = ({ title, sidebarIsOpen, onToggle, device, location }) => {
  const routeLocation = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);
  return (
    <Root>
      <Grid>
        <div>
          <SidebarToggle onToggle={onToggle} isOpen={sidebarIsOpen} />
        </div>
        <div>
          <HeaderTitle>
            <Title size={5} withoutMargin>
              {routeLocation}
            </Title>
            <Title size={5} withoutMargin>
              {title} {!!routeLocation.length && (<span>-&nbsp;</span>)}
            </Title>
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
  location: PropTypes.object.isRequired,
};

Header.defaultProps = {
  onToggle: () => {},
};

export default withRouter(withDeviceType(Header));
