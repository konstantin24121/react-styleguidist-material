import React from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { stylesConsts as headerStyledConsts } from 'sg/compounds/Header';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import UpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

import { Root } from './BackTopStyled';

class BackTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.throttledHandleScroll = throttle(this.handleScroll, 150);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.throttledHandleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledHandleScroll);
    this.throttledHandleScroll.cancel();
  }

  handleScroll = () => {
    const { documentElement, body } = document;
    const scrollTop = documentElement.scrollTop || body.scrollTop;
    this.setState({
      isVisible: scrollTop > headerStyledConsts.headerScale + 100,
    });
  }

  handleScrollTop = () => {
    const { documentElement, body } = document;
    documentElement.scrollTop = 0;
    body.scrollTop = 0;
  }

  render() {
    const { isShifted } = this.props;
    const { isVisible } = this.state;
    return (
      <Root isVisible={isVisible} isShifted={isShifted} >
        <FloatingActionButton onClick={this.handleScrollTop}>
          <UpIcon />
        </FloatingActionButton>
      </Root>
    );
  }
}

BackTop.propTypes = {
  isShifted: PropTypes.bool.isRequired,
};

export default BackTop;
