import React from 'react';
import PropTypes from 'prop-types';
import { Title, Hr, P } from 'sg/components';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import Snackbar from 'material-ui/Snackbar';
import { MarkdownContent, PropsTable, Examples } from 'sg/compounds';
import { Grid, GridComponent, Version,
  ProjectPath, ImportString,
  iconStyles, iconBtnStyles } from './DocPageStyled';

class ComponentRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  getTooltipPosition = () => (this.props.device.matchDevice('HANDHOLD') ? 'top-left' : 'top-right')

  handleCopy = () => {
    this.setState({
      copied: true,
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      copied: false,
    });
  };

  renderPure = () => (
    <a
      href="https://reactjs.org/docs/react-api.html#reactpurecomponent"
      target="_blank"
      rel="noopener noreferrer"
      key="pureLink"
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
      key="flowLink"
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
      key="statelessLink"
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
        !!props.version && <Version key="version">v{props.version}</Version>,
        props.pure && this.renderPure(),
        props.flow && this.renderFlow(),
        props.stateless && this.renderStateless(),
      ]
    );
  }

  renderImportString() {
    const { props } = this.props.dockSegment;
    const { importString } = props; // eslint-disable-line
    return (
      <ImportString>
        <CopyToClipboard
          text={importString}
          onCopy={this.handleCopy}
        >
          <span>
            {importString}
          </span>
        </CopyToClipboard>
      </ImportString>
    );
  }

  renderChangelog() {
    const { changelog } = this.props.dockSegment;
    return (
      <div>
        <Title size={4}>Changelog</Title>
        <MarkdownContent content={changelog} />
      </div>
    );
  }

  render() {
    const { path, name, pathLine, props, changelog, examples } = this.props.dockSegment;
    const { importString } = props;
    return (
      <Grid>
        <div>
          <Title size={2} isThin>{name}</Title>
        </div>
        <div>
          {this.renderComponentSpecials()}
        </div>
        <Hr />
        <div>
          <GridComponent>
            <div><ProjectPath>{pathLine}</ProjectPath></div>
            <div>
              {importString && this.renderImportString()}
            </div>
            <div>
              <P>{props.description}</P>
            </div>
            <div>
              <Title size={4} isThin>Properties</Title>
              <PropsTable properties={props.props} isFlow={props.flow} />
            </div>
            <div><Examples examples={examples} componentName={name} path={path} /></div>
            <div>
              {changelog && this.renderChangelog()}
            </div>
          </GridComponent>
          <Snackbar
            open={this.state.copied}
            message="Import string copied into youy buffer"
            autoHideDuration={4000}
            onRequestClose={this.handleCloseSnackbar}
          />
        </div>
      </Grid>
    );
  }
}

ComponentRenderer.propTypes = {
  dockSegment: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
};

export default ComponentRenderer;
