import { Box, Paper } from '@material-ui/core';

import ErrorOutput from './ErrorOutput';
import OutputCode from './OutputCode';
import StdOutput from './StdOutput';

export default function OutputBox({ output }) {
  return (
    <Paper sx={{ padding: '8px', marginTop: '5px' }}>
      <Box
        component="pre"
        sx={{ whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}
      >
        <StdOutput output={output.stdout} />
        <ErrorOutput output={output.stderr} />
        <OutputCode code={output.code} />
      </Box>
    </Paper>
  );
}
