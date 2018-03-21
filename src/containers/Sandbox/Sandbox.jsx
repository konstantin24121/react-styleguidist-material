import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { withTheme } from 'styled-components';
import { ACTIONS as uiActions } from 'sg/redux/modules/ui';
import { SELECTORS as sectionsSelectors } from 'sg/redux/modules/sections';
import { SELECTORS as sandboxSelectors } from 'sg/redux/modules/sandbox';
import { Toolbar } from 'sg/containers';
import { Editor, Scrollable, Preview } from 'sg/components';
import { Root, Box, Content, PreviewArea,
  playgroundStyles, CodeEditorArea, scrolabbleStyles } from './SandboxStyled';

class Sandbox extends React.PureComponent {
  constructor(props) {
    super(props);
    const component = this.getComponent(props);
    this.state = {
      code: component.example.content,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      const component = this.getComponent(nextProps);
      this.setState = {
        code: component.example.content,
      };
    }
  }

  getSandBoxId = () => `${this.props.match.params.componentPath}/${this.props.match.params.index}`

  getComponent = (props = this.props) => {
    const { match, component, location, history } = props;
    const exampleIndex = match.params.index;
    if (!component || !component.examples[exampleIndex] || component.examples[exampleIndex].type !== 'code') {
      history.replace({
        pathname: '/404',
        state: { from: location },
      });
    }
    return { ...component, example: component.examples[exampleIndex] };
  }

  handleChangeCode = (newCode) => {
    this.setState({
      code: newCode,
    });
  }

  render() {
    const { theme, codeEditorIsOpen, playgroundSize,
      playgroundColor, playgroundMultiply } = this.props;
    const { code } = this.state;
    const component = this.getComponent();
    const components = [];
    for (let i = 0; i < playgroundMultiply; i += 1) {
      components.push(
        <Preview key={`component-${i}`} code={code} evalInContext={component.example.evalInContext} />,
      );
    }

    return (
      <Root>
        <Box>
          <Toolbar sandboxId={this.getSandBoxId()} />
          <Content>
            <PreviewArea>
              <Paper
                style={playgroundStyles(
                  {
                    theme,
                    size: playgroundSize,
                    color: playgroundColor,
                  },
                )}
              >
                <Scrollable style={scrolabbleStyles({ theme })}>
                  {components}
                </Scrollable>
              </Paper>
            </PreviewArea>
            <CodeEditorArea isOpen={codeEditorIsOpen}>
              <Editor code={code} onChange={this.handleChangeCode} />
            </CodeEditorArea>
          </Content>
        </Box>
      </Root>
    );
  }
}

Sandbox.propTypes = {
  /**
   * Connected
   */
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  codeEditorIsOpen: PropTypes.bool.isRequired,
  playgroundSize: PropTypes.string.isRequired,
  playgroundMultiply: PropTypes.number.isRequired,
  playgroundColor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
};


function mapStateToProps(state, ownProps) {
  const { match } = ownProps;
  const pathname = match.params.componentPath;
  const sandboxId = `${match.params.componentPath}/${match.params.index}`;
  return {
    component: sectionsSelectors.getActiveSection(state, { pathname: `/${pathname}` }),
    ...sandboxSelectors.getSandboxSettings(state, { sandboxId }),
  };
}

export default connect(mapStateToProps, { ...uiActions })(withTheme(Sandbox));
