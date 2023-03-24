import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';
import PageInfo from './components/ui/PageInfo';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<PageInfo pageNumber={1} pageTitle="Scegli Barbiere" />
			</ThemeProvider>
		</>
	);
};

export default App;
