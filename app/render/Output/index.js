import { Box } from '@material-ui/core';

import { useSelector } from '../store';
import List from './List';

export default function Output() {
  const outputList = useSelector('outputList') || [];

  console.log(outputList);

  return (
    <Box sx={{ padding: '15px', height: '100%', overflow: 'hidden auto' }}>
      <List outputs={outputList} />
    </Box>
  );
}
