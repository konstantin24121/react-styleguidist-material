import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import theme from 'sg/styles/theme';

export default class Theme extends PureComponent {
 static propTypes = {
   children: PropTypes.node.isRequired,
 };

 render() {
   return (
     <MuiThemeProvider>
       <ThemeProvider theme={theme}>
         {this.props.children}
       </ThemeProvider>
     </MuiThemeProvider>
   );
 }
}
