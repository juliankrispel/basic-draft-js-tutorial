import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
      />
    );
  }
}

export default App;
