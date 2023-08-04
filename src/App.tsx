import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/globalStyle';
import { theme } from './styled/theme';
import MastersPage from './pages/MastersPage/MastersPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage/OrderPage';

const App: FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<MastersPage />} />
							<Route path="/order" element={<OrderPage />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</ThemeProvider>
		</>
	);
};

export default App;
