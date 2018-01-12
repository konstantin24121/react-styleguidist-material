import React from 'react';
import PropTypes from 'prop-types';
import { Preview, Editor } from 'sg/components';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import CodeIcon from 'material-ui/svg-icons/action/code';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import KeyboardIcon from 'material-ui/svg-icons/hardware/keyboard';
import { Root, Toolbar, styleIcon } from './ExamplePreviewStyled';

class ExamplePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
      isCopied: false,
    };
  }

  handleCopy = () => {
    this.setState({
      isCopied: true,
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      isCopied: false,
    });
  };

  handleCollapseToogle = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  }

  render() {
    const { code, device } = this.props;
    const { isCollapsed, isCopied } = this.state;
    const isTouch = device.checkTouchScreen();
    return (
      <Root isTouch={isTouch}>
        <Paper>
          <Toolbar isTouch={isTouch}>
            <CopyToClipboard
              text={code}
              onCopy={this.handleCopy}
            >
              <IconButton onClick={this.handleCopy} iconStyle={styleIcon}>
                <KeyboardIcon />
              </IconButton>
            </CopyToClipboard>
            <IconButton onClick={this.handleCollapseToogle} iconStyle={styleIcon}>
              <CodeIcon />
            </IconButton>
          </Toolbar>
          <Preview {...this.props} />
          {!isCollapsed && <Editor code={code} />}
          <Snackbar
            open={isCopied}
            message="Code copied into youy buffer"
            autoHideDuration={4000}
            onRequestClose={this.handleCloseSnackbar}
          />
        </Paper>
      </Root>
    );
  }
}

ExamplePreview.propTypes = {
  code: PropTypes.string.isRequired,
  device: PropTypes.object.isRequired,
};

export default withDeviceType(ExamplePreview);
