import { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
  }

  getChildContext() {
    return {
      device: this.device,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.device._update();
  };

  render() {
    return this.props.children;
  }
}

export default DeviceProvider;
