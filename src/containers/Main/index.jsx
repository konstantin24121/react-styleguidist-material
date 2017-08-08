import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Main extends Component {
  static propTypes = {
    sample: PropTypes.string.isRequired,
  };
  render() {
    return (<div>
      {this.props.sample}
    </div>);
  }
}

function mapStateToProps(store) {
  return {
    sample: store.sample.string,
  };
}

export default connect(mapStateToProps)(Main);
