import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Markdown } from 'rsg-components';

const s = require('./Changelog.css');

class ChangelogRenderer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { text, lastUpdate } = this.props;
    const { open } = this.state;
    return (
      <div className={s.root}>
        <RaisedButton
          label={open ? 'Close changelog' : 'Open changelog'}
          primary
          onClick={this.handleToggle}
        />
        {lastUpdate &&
        <div className={s.lastUpdate}>
            Last update: {lastUpdate}
        </div>
        }
        <div className={s.changelogWrapper}>
          {open && <Markdown text={text} />}
        </div>
      </div>
    );
  }
}

ChangelogRenderer.propTypes = {
  text: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string,
};

export default ChangelogRenderer;
