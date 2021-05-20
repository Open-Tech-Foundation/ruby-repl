import { Box } from '@material-ui/core';
import AppNameWithLogo from './AppNameWithLogo';

export default function Header() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
      <AppNameWithLogo />
    </Box>
  );
}
