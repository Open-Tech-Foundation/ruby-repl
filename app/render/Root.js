import { Box, Paper } from '@material-ui/core';

import Editor from './Editor';
import Footer from './Footer';
import Header from './Header';
import Output from './Output';

export default function App() {
  return (
    <Paper sx={{ height: '100%' }} square elevation={24}>
      <Box
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateRows: '50px 1fr 25px',
        }}
      >
        <Header />
        <Box
          sx={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            overflow: 'hidden',
          }}
        >
          <Editor />
          <Output />
        </Box>
        <Footer />
      </Box>
    </Paper>
  );
}
