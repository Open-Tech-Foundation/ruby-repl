import { Box, Paper } from '@material-ui/core';

import Header from './Header';

export default function App() {
  return (
    <Paper
      sx={{ height: '100%', padding: '15px', boxSizing: 'border-box' }}
      square
    >
      <Box
        sx={{ height: '100%', display: 'grid', gridTemplateRows: '50px 1fr' }}
      >
        <Header />
        <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
          <Box>Editor</Box>
          <Box>Output</Box>
        </Box>
      </Box>
    </Paper>
  );
}
