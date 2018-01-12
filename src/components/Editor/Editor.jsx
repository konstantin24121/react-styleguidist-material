// CodeMirror
import 'codemirror/mode/jsx/jsx';
import 'codemirror/lib/codemirror.css';
import 'rsg-codemirror-theme.css';

import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Controlled as CodeMirror } from 'react-codemirror2';
import EditorRenderer from './EditorRenderer';

const codemirrorOptions = {
  mode: 'jsx',
  lineNumbers: false,
  lineWrapping: true,
  smartIndent: false,
  matchBrackets: true,
  viewportMargin: Infinity,
  tabSize: 2,
};

const UPDATE_DELAY = 10;

export default class Editor extends React.Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
    };
    this.handleChange = debounce(this.handleChange.bind(this), UPDATE_DELAY);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      code: nextProps.code,
    });
  }

  shouldComponentUpdate(nextProps, netxState) {
    return netxState.code !== this.state.code;
  }

  handleChange(newCode) {
    this.setState({ code: newCode });
    this.props.onChange(newCode);
  }

  render() {
    const { code } = this.state;
    return (
      <EditorRenderer>
        <CodeMirror value={code} onChange={this.handleChange} options={codemirrorOptions} />
      </EditorRenderer>
    );
  }
}
