import { Box } from '@material-ui/core';

import RubyLogo from './images/ruby-logo.png';

export default function Header() {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={RubyLogo} alt="The Ruby Logo" width="25px" height="25px" />
        <Box component="span" ml="5px">
          REPL
        </Box>
      </Box>
    </Box>
  );
}
