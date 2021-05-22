import { Box, Paper } from '@material-ui/core';

export default function List({ outputs }) {
  return outputs.map((output, i) => (
    <Paper sx={{ padding: '15px', marginTop: '15px' }} key={i}>
      <span>Output &gt;</span>
      <Box>
        <pre>{output}</pre>
      </Box>
    </Paper>
  ));
}
