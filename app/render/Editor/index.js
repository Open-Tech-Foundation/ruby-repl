import { Box } from '@material-ui/core';
import * as monacoEditor from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';

export default function Editor() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [loadingFile, setLoadingFile] = useState(true);

  useEffect(() => {
    editorRef.current = monacoEditor.editor.create(editorContainerRef.current, {
      language: 'ruby',
      theme: 'vs-dark',
      tabSize: 2,
    });
    loadFileToEditor('main.rb');
  }, []);

  useEffect(() => {
    if (editorRef.current && !loadingFile) {
      editorRef.current.onDidChangeModelContent(() => {
        saveFile(editorRef.current.getValue());
      });
    }
  }, [editorRef, loadingFile]);

  async function loadFileToEditor(filename) {
    const content = await window.electron.invoke('load-file', filename);
    editorRef.current.getModel().setValue(content);
    setLoadingFile(false);
  }

  async function saveFile(content) {
    await window.electron.invoke('save-file', 'main.rb', content);
  }

  return <Box ref={editorContainerRef} />;
}
