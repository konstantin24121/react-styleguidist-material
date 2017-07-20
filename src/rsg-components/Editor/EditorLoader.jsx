import React, { Component } from 'react';
import { EditorLoaderRenderer } from 'rsg-components';

export default class EditorLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: null,
    };
  }

  componentDidMount() {
    require.ensure(['rsg-components/Editor/Editor'], (require) => {
      this.setState({
        editor: require('rsg-components/Editor/Editor').default, // eslint-disable-line
      });
    });
  }

  render() {
    const Editor = this.state.editor;
    if (!Editor) {
      return <EditorLoaderRenderer />;
    }

    return <Editor {...this.props} />;
  }
}
