import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Markdown } from 'rsg-components';
import cx from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Responsive from 'react-responsive-decorator';

injectTapEventPlugin();

const s = require('./StyleGuide.css');

@Responsive
class StyleGuideRenderer extends Component {
  static displayName = 'StyleGuideRenderer';

  static propTypes = {
    title: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired,
    toc: PropTypes.node.isRequired,
    sidebar: PropTypes.bool,
    singleExample: PropTypes.bool,
    targetComponentName: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: localStorage.getItem(`${this.constructor.displayName}DrawerOpen`) === 'true',
    };
  }

  componentWillMount() {
    const { media } = this.props;
    media({ minWidth: 800 }, () => {
      this.setState({
        isMobile: false,
      });
    });

    media({ maxWidth: 800 }, () => {
      this.setState({
        isMobile: true,
      });
    });
  }

  componentDidMount() {
    if (this.props.sidebar) {
      setTimeout(this.resizeText, 500);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`${this.constructor.displayName}DrawerOpen`, nextState.drawerOpen);
  }

  resizeText = () => {
    const step = 0.1;
    const minFontSize = 9;
    const style = getComputedStyle(this.titleRef);
    const scrollWidth = this.titleRef.scrollWidth;
    const width = this.titleRef.offsetWidth;
    if (scrollWidth > width) {
      const fontsize = parseInt(style.fontSize, 10) - step;
      if (fontsize >= minFontSize){
        this.titleRef.style.fontSize = `${fontsize}px`;
       this.resizeText();
      }
    }
  }

  handleOpenDrawer = () => {
    this.setState({
      drawerOpen: true,
    });
  };

  handleCloseDrawer = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  render() {
    const { title, homepageUrl, components, toc, sidebar,
      singleExample, targetComponentName } = this.props;
    const { drawerOpen } = this.state;
    return (
      <MuiThemeProvider>
        <div className={cx(s.root, drawerOpen && sidebar && s.root_HasSidebar)}>
          <div className={s.header}>
            {singleExample &&
              <div className={s.titleline}>
                Component: {targetComponentName}
              </div>
            }
            {sidebar &&
              <IconButton
                tooltip={drawerOpen ? 'Close menu' : 'Open menu'}
                tooltipPosition="bottom-left"
                onClick={drawerOpen ? this.handleCloseDrawer : this.handleOpenDrawer}
              >
                <FontIcon className="material-icons" color="white">bookmark</FontIcon>
              </IconButton>
            }
            {!sidebar &&
              <a href={`/#${targetComponentName}`}>
                <IconButton
                  tooltip="Back to styleguide"
                  tooltipPosition="bottom-left"
                >
                  <FontIcon className="material-icons" color="white">widgets</FontIcon>
                </IconButton>
              </a>
            }
          </div>
          {!singleExample &&
            <main className={s.content}>
              <div className={s.components}>
                {components}
              </div>
            </main>
          }
          {singleExample && components}
          {sidebar &&
            <Drawer open={drawerOpen} docked={!this.state.isMobile}>
              <h1 className={s.heading} >
                <div ref={(el) => (this.titleRef = el)}>
                  {title}
                </div>
              </h1>
              <IconButton
                tooltip={drawerOpen ? 'Close filter' : 'Open filter'}
                tooltipPosition="bottom-left"
                onClick={drawerOpen ? this.handleCloseDrawer : this.handleOpenDrawer}
                style={{ position: 'absolute', top: '0.5rem', right: 0, zIndex: 2 }}
              >
                <FontIcon className="material-icons" color="white">close</FontIcon>
              </IconButton>
              <div className={s.doc}>
                <div className={s.scrollbar}>
                  {toc}
                </div>
              </div>

              <footer className={s.footer}>
                <Markdown text={`Forked by [React Styleguidist](${homepageUrl})`} />
              </footer>
            </Drawer>
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default StyleGuideRenderer;
