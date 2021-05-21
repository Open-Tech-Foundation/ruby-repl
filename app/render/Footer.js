import { Box } from '@material-ui/core';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [version, setVersion] = useState('Checking for ruby...');

  useEffect(() => {
    async function getRubyVersion() {
      setVersion(await window.electron.getRubyVersion());
    }
    getRubyVersion();
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
