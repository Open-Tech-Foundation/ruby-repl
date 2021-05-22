import { Box } from '@material-ui/core';

import { useSelector } from '../store';
import List from './List';

export default function Output() {
  const outputList = useSelector('outputList') || [];

  return (
    <Box
      sx={{
        padding: '15px',
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'hidden auto',
      }}
    >
      <span>Output &gt;</span>
      <List outputs={outputList} />
    </Box>
  );
}
