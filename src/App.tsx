import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';
import MastersPage from './pages/MastersPage/MastersPage';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Provider store={store}>
					<MastersPage />
				</Provider>
			</ThemeProvider>
		</>
	);
};

export default App;
