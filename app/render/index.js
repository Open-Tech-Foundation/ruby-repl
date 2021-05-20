import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Root from './Root';

import '@fontsource/roboto';

const theme = createTheme({
  palette: {
    mode: 'dark',
    divider: 'rgba(255,255,255,0.12)',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));
