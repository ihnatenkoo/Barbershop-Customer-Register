import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
};

export default App;
