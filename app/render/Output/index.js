import { Box, Paper } from '@material-ui/core';

import { useSelector } from '../store';
import Header from './Header';
import Terminal from './Terminal';

export default function Output() {
  const outputList = useSelector('outputList') || [];

  return (
    <Paper
      elevation={0}
      sx={{
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'hidden auto',
      }}
    >
      <Header />
      <Box sx={{ padding: '15px' }}>
        <Terminal data={outputList} />
      </Box>
    </Paper>
  );
}
