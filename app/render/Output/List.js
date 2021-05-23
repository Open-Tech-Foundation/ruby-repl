import { Alert, Box, Paper } from '@material-ui/core';

function createMarkup(str) {
  return { __html: str };
}

function HTMLComponent(str) {
  return <div dangerouslySetInnerHTML={createMarkup(str)} />;
}

export default function List({ outputs }) {
  return outputs.map((output, i) => (
    <Paper sx={{ padding: '8px', marginTop: '5px' }} key={i}>
      <Box>
        <Box
          component="pre"
          sx={{ whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}
        >
          {HTMLComponent(output.stdout)}
          {output.stderr && (
            <Alert sx={{ marginTop: '5px' }} severity="error">
              {output.stderr}
            </Alert>
          )}
          {output.code && <p>Program exited with code {output.code}</p>}
        </Box>
      </Box>
    </Paper>
  ));
}
