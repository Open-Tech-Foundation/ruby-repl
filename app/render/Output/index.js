import { Box } from '@material-ui/core';

import { useSelector } from '../store';
import Header from './Header';
import List from './List';

export default function Output() {
  const outputList = useSelector('outputList') || [];

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'hidden auto',
      }}
    >
      <Header />
      <Box sx={{ padding: '15px' }}>
        <List outputs={outputList} />
      </Box>
    </Box>
  );
}
