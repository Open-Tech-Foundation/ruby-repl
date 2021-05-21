import { Box } from '@material-ui/core';
import * as monacoEditor from 'monaco-editor';
import { useEffect, useRef } from 'react';

export default function Editor() {
  const editorDefaultValue = "def msg\n\t'I 😍 RUBY'\nend\n\nputs msg";
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current = monacoEditor.editor.create(editorRef.current, {
      language: 'ruby',
      theme: 'vs-dark',
      value: editorDefaultValue,
      tabSize: 2,
    });

    editorRef.current.onDidChangeModelContent((e) => {
      console.log(editorRef.current.getValue());
      console.log(e);
    });
  }, [editorRef]);

  return <Box ref={editorRef} />;
}
