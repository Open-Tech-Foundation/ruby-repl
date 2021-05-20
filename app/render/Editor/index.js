import { Box } from '@material-ui/core';
import { editor } from 'monaco-editor';
import { useEffect, useRef } from 'react';

export default function Editor() {
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current = editor.create(editorRef.current, {
      language: 'ruby',
      theme: 'vs-dark',
      value: "def msg\n\t'I 😍 RUBY'\nend\n\np msg",
      tabSize: 2,
    });
  }, [editorRef]);

  return <Box ref={editorRef} />;
}
