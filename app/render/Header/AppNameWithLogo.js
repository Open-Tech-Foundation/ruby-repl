import { Box } from '@material-ui/core';

import RubyLogo from '../images/ruby-logo.png';

export default function AppNameWithLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={RubyLogo} alt="The Ruby Logo" width="25px" height="25px" />
      <Box
        component="span"
        ml="8px"
        sx={{ fontSize: '25px', letterSpacing: '2px' }}
      >
        REPL
      </Box>
    </Box>
  );
}
