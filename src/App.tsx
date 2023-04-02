import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';
import MastersPage from './pages/MastersPage/MastersPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={	<MastersPage />}/>
							<Route path='/order' element={<h1>Order Page</h1>}/>
						</Routes>
					</BrowserRouter>
				</Provider>
			</ThemeProvider>
		</>
	);
};

export default App;
