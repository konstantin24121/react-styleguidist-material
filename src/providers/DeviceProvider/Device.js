import PropTypes from 'prop-types';

const DeviceTypeShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
});

const DeviceShape = PropTypes.shape({
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
  matchDevice: PropTypes.func,
  subscriptions: PropTypes.array,
  types: PropTypes.arrayOf(DeviceTypeShape).isRequired,
});

class Device {
  constructor(types) {
    this.types = types;
    this.subscriptions = [];
  }

  _update = () => {
    this.subscriptions.forEach((observer) => observer());
  }

  matchDevice = (deviceKey) => {
    const deviceIndex = this.types.findIndex((device) => device.name === deviceKey);

    if (deviceIndex === -1) {
      throw new Error(`DeviceProvider dont know device '${deviceKey}'`);
    }
    return window.matchMedia(this.types[deviceIndex].query).matches;
  }

  checkTouchScreen = () =>
    ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

  subscribe(observer) {
    this.subscriptions.push(observer);
  }

  unsubscribe(observer) {
    const index = this.subscriptions.indexOf(observer);

    if (index === -1) {
      this.subscriptions.splice(index, 1);
    }
  }
}

export default Device;
export { DeviceTypeShape, DeviceShape };
