import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';
import Masters from './pages/Masters/Masters';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Masters />
			</ThemeProvider>
		</>
	);
};

export default App;
