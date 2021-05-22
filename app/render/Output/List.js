import { Box, Paper } from '@material-ui/core';

export default function List({ outputs }) {
  return outputs.map((output, i) => (
    <Paper sx={{ padding: '5px', marginTop: '5px' }} key={i}>
      <Box>
        <Box
          component="pre"
          sx={{ whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}
        >
          {output}
        </Box>
      </Box>
    </Paper>
  ));
}
