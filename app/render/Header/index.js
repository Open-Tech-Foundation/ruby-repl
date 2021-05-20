import { Box } from '@material-ui/core';

import AppNameWithLogo from './AppNameWithLogo';
import RunBtn from './RunBtn';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '0px 15px',
      }}
    >
      <AppNameWithLogo />
      <RunBtn />
      <div />
    </Box>
  );
}
