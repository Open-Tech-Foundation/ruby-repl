import { Box, Paper } from '@material-ui/core';
import Footer from './Footer';

import Header from './Header';

export default function App() {
  return (
    <Paper sx={{ height: '100%' }} square>
      <Box
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateRows: '50px 1fr 25px',
        }}
      >
        <Header />
        <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
          <Box>Editor</Box>
          <Box>Output</Box>
        </Box>
        <Footer />
      </Box>
    </Paper>
  );
}
