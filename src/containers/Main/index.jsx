import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from 'sg/compounds';

class Main extends Component {
  static propTypes = {
    /**
     * Connected
     */
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <Header title={this.props.title} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    title: store.ui.title,
  };
}

export default connect(mapStateToProps)(Main);
