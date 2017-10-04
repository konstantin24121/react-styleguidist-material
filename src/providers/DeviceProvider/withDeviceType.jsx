import React, { Component } from 'react';
import { DeviceShape } from './Device';
import { getDisplayName } from 'sg/utils/utils';

function withDeviceType(WrappedComponent) {
  class WithDeviceType extends Component {
    static contextTypes = {
      device: DeviceShape,
    }

    componentDidMount() {
      this.context.device.subscribe(this.handleChange);
    }

    componentWillUnmount() {
      this.context.device.unsubscribe(this.handleChange);
    }

    handleChange = () => {
      this.forceUpdate();
    }

    render() {
      const device = { ...this.context.device };
      return <WrappedComponent device={device} {...this.props} />;
    }
  }
  WithDeviceType.displayName = `WithDeviceType(${getDisplayName(WrappedComponent)})`;
  return WithDeviceType;
}

export default withDeviceType;
