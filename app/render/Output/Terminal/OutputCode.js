import { Alert } from '@material-ui/core';

export default function OutputCode({ code }) {
  if (code === 0) return null;

  return (
    <Alert
      variant="string"
      sx={{ marginTop: '5px', fontSize: '14px' }}
      severity="warning"
    >
      Process exited with code {code}
    </Alert>
  );
}
