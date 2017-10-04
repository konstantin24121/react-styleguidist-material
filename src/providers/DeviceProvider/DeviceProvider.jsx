import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import Device, { DeviceTypeShape, DeviceShape } from './Device';

class DeviceProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    deviceTypes: PropTypes.arrayOf(DeviceTypeShape).isRequired,
  };

  static childContextTypes = {
    device: DeviceShape,
  };

  constructor(props) {
    super(props);
    this.device = new Device(this.props.deviceTypes);
    this.handleResizeThrottled = throttle(this.handleResize, 150);
  }

  getChildContext() {
    return {
      device: this.device,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleResizeThrottled);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeThrottled);
  }

  handleResize = () => {
    this.device._update();
  };

  render() {
    return this.props.children;
  }
}

export default DeviceProvider;
