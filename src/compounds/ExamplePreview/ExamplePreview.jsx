import React from 'react';
import PropTypes from 'prop-types';
import { Preview, Editor } from 'sg/components';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import CodeIcon from 'material-ui/svg-icons/action/code';
import { withTheme } from 'styled-components';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import KeyboardIcon from 'material-ui/svg-icons/hardware/keyboard';
import SandBoxIcon from 'material-ui/svg-icons/content/move-to-inbox';
import { Link } from 'react-router-dom';
import { Root, Toolbar, iconStyle, hoveredIconStyle } from './ExamplePreviewStyled';

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
    const { code, device, theme, index, path } = this.props;
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
              <IconButton
                onClick={this.handleCopy}
                iconStyle={iconStyle(theme)}
                hoveredStyle={hoveredIconStyle(theme)}
              >
                <KeyboardIcon />
              </IconButton>
            </CopyToClipboard>
            <IconButton
              onClick={this.handleCollapseToogle}
              iconStyle={iconStyle(theme)}
              hoveredStyle={hoveredIconStyle(theme)}
            >
              <CodeIcon />
            </IconButton>
            <Link to={`/sandbox${path}/${index}`}>
              <IconButton
                iconStyle={iconStyle(theme)}
                hoveredStyle={hoveredIconStyle(theme)}
              >
                <SandBoxIcon />
              </IconButton>
            </Link>
          </Toolbar>
          <Preview {...this.props} />
          {!isCollapsed && <Editor code={code} isReadOnly />}
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
  componentName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  device: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default withDeviceType(withTheme(ExamplePreview));
