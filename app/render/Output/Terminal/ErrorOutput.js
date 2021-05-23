import { Alert, AlertTitle, Box } from '@material-ui/core';

export default function ErrorOutput({ output }) {
  if (!output) return null;

  return (
    <Alert variant="outlined" sx={{ marginTop: '5px' }} severity="error">
      <AlertTitle>Error</AlertTitle>
      <Box
        component="p"
        sx={{ wordWrap: 'break-word', wordBreak: 'break-word' }}
      >
        {output}
      </Box>
    </Alert>
  );
}
