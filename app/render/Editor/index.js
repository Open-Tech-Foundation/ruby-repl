import { Box } from '@material-ui/core';
import * as monacoEditor from 'monaco-editor';
import { useEffect, useRef } from 'react';

export default function Editor() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current = monacoEditor.editor.create(editorContainerRef.current, {
      language: 'ruby',
      theme: 'vs-dark',
      tabSize: 2,
    });

    editorRef.current.onDidChangeModelContent((e) => {
      console.log(editorRef.current.getValue());
      console.log(e);
    });
    loadFileToEditor('main.rb');
  }, []);

  async function loadFileToEditor(filename) {
    const content = await window.electron.loadFile(filename);
    editorRef.current.getModel().setValue(content);
  }

  return <Box ref={editorContainerRef} />;
}
