import { Box, Divider, Paper } from '@material-ui/core';

import Editor from './Editor';
import Footer from './Footer';
import Header from './Header';
import Output from './Output';

export default function App() {
  return (
    <Paper sx={{ height: '100%' }} square>
      <Box
        sx={{
          height: '100%',
          display: 'grid',
          gridTemplateRows: '50px 2px 1fr 25px',
        }}
      >
        <Header />
        <Divider />
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
