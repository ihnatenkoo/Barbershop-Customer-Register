import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';
import MastersPage from './pages/MastersPage/MastersPage';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MastersPage />
			</ThemeProvider>
		</>
	);
};

export default App;
