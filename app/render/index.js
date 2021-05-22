import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/roboto';

import Root from './Root';
import { StoreProvider, useStore } from './store';

const theme = createTheme({
  palette: {
    mode: 'dark',
    divider: 'rgba(255,255,255,0.12)',
  },
});

function App() {
  const store = useStore();

  return (
    <ThemeProvider theme={theme}>
      <StoreProvider value={store}>
        <Root />
      </StoreProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));
