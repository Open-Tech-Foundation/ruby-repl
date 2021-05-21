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
    loadFileToEditor('main.rb');
  }, []);

  useEffect(() => {
    console.log('editorRef: ', editorRef);
    if (editorRef) {
      editorRef.current.onDidChangeModelContent((e) => {
        console.log(editorRef.current.getValue());
        console.log(e);
        saveFile(editorRef.current.getValue());
      });
    }
  }, [editorRef]);

  async function loadFileToEditor(filename) {
    const content = await window.electron.invoke('load-file', filename);
    editorRef.current.getModel().setValue(content);
  }

  async function saveFile(content) {
    await window.electron.invoke('save-file', 'main.rb', content);
  }

  return <Box ref={editorContainerRef} />;
}
