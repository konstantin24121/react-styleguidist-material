import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import TextFormatIcon from 'material-ui/svg-icons/content/text-format';
import { withTheme } from 'styled-components';

class FontSettings extends React.PureComponent {
  render() {
    const { theme } = this.props;
    return (
      <IconButton>
        <TextFormatIcon color={theme.colors.typoInverted} />
      </IconButton>
    );
  }
}

FontSettings.propTypes = {
  /*
    Connected
   */
  theme: PropTypes.any.isRequired,
};

export default withTheme(FontSettings);
