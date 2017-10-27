import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { withDeviceType } from 'sg/providers/DeviceProvider';
import { Title, Hr } from 'sg/components';
import { Markdown } from 'sg/compounds';
import { SELECTORS as sectionsSelectors } from 'sg/redux/modules/sections';

import { Root, Grid, Version, iconStyles, iconBtnStyles } from './DocPageStyled';
/* eslint-disable react/prefer-stateless-function */
class DocPage extends React.Component {
  getTooltipPosition = () => (this.props.device.matchDevice('HANDHOLD') ? 'top-left' : 'top-right')

  renderPure = () => (
    <a
      href="https://reactjs.org/docs/react-api.html#reactpurecomponent"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        tooltip="This component is Pure"
        tooltipPosition={this.getTooltipPosition()}
        style={iconBtnStyles}
        iconStyle={iconStyles}
      >
        <FontIcon
          className="material-icons"
        >
          flash_on
        </FontIcon>
      </IconButton>
    </a>
  );

  renderFlow = () => (
    <a
      href="http://www.saltycrane.com/blog/2016/06/flow-type-cheat-sheet/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        tooltip="This component is flow typed"
        tooltipPosition={this.getTooltipPosition()}
        style={iconBtnStyles}
        iconStyle={iconStyles}
      >
        <FontIcon
          className="material-icons"
        >
          security
        </FontIcon>
      </IconButton>
    </a>
  );

  renderStateless = () => (
    <a
      href="https://toddmotto.com/stateless-react-components/#enter-stateless-components"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        tooltip="This component is stateless"
        tooltipPosition={this.getTooltipPosition()}
        style={iconBtnStyles}
        iconStyle={iconStyles}
      >
        <FontIcon
          className="material-icons"
        >
          filter_center_focus
        </FontIcon>
      </IconButton>
    </a>
  );

  renderComponentSpecials() {
    const { props } = this.props.dockSegment;
    return (
      [
        !!props.version && <Version>v{props.version}</Version>,
        props.pure && this.renderPure(),
        props.flow && this.renderFlow(),
        props.stateless && this.renderStateless(),
      ]
    );
  }

  renderContent = () => {
    const { content } = this.props.dockSegment;
    return content.map(({ content: markdownContent }) => (
      <Markdown
        text={markdownContent}
      />
    ));
  }

  render() {
    const { location, dockSegment } = this.props;
    if (!dockSegment) {
      return (
        <Redirect
          to={{
            pathname: '/404',
            state: { from: location },
          }}
        />
      );
    }
    const { name, props, content } = dockSegment;
    return (
      <Root>
        <Grid>
          <div>
            <Title size={2} isThin>{name}</Title>
          </div>
          <div>
            {!!props && this.renderComponentSpecials()}
          </div>
          <Hr />
          <div>
            {!!content && this.renderContent()}
          </div>
        </Grid>
      </Root>
    );
  }
}

DocPage.propTypes = {
  /*
    Connected
   */
  device: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
  dockSegment: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    dockSegment: sectionsSelectors.getActiveSection(state, ownProps),
  };
}

export default connect(mapStateToProps)(withDeviceType(DocPage));
