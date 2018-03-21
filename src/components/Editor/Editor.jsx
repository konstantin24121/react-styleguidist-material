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
    isReadOnly: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    isReadOnly: false,
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
    };
    this.handleChangeDebounced = debounce(this.handleChange, UPDATE_DELAY);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      code: nextProps.code,
    });
  }

  shouldComponentUpdate(nextProps, netxState) {
    return netxState.code !== this.state.code;
  }

  componentWillUnmount() {
    this.handleChangeDebounced.cancel();
  }

  handleChange = (editor, data, value) => {
    this.props.onChange(value);
  }

  handleBeforeChange = (editor, data, value) => {
    this.setState({ code: value });
  }

  render() {
    const { code } = this.state;
    const { isReadOnly } = this.props;
    return (
      <EditorRenderer>
        <CodeMirror
          value={code}
          onChange={this.handleChangeDebounced}
          onBeforeChange={this.handleBeforeChange}
          options={{
            ...codemirrorOptions,
            readOnly: isReadOnly,
          }}
        />
      </EditorRenderer>
    );
  }
}
