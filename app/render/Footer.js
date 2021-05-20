import { Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';

export default function Footer() {
  const [version, serVersion] = useState('Checking for ruby...');

  useEffect(() => {
    ipcRenderer.on('get-ruby-version-reply', (event, version) => {
      serVersion(version);
    });
    ipcRenderer.send('get-ruby-version');
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        padding: '0px 15px',
        fontSize: '14px',
      }}
    >
      <Box>{version}</Box>
    </Box>
  );
}
