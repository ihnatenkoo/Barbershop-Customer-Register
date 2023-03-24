import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';
import MainLayout from './components/layout/MainLayout';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainLayout pageNumber={1} pageTitle="Scegli Barbiere">
					Hello
				</MainLayout>
			</ThemeProvider>
		</>
	);
};

export default App;
