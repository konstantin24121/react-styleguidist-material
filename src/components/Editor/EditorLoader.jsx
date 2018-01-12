import React from 'react';
import EditorLoaderRenderer from './EditorLoaderRenderer';

export default class EditorLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: null,
    };
  }

  componentDidMount() {
    require.ensure(['sg/components/Editor/Editor'], (require) => {
      this.setState({
        editor: require('sg/components/Editor/Editor').default, // eslint-disable-line
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
