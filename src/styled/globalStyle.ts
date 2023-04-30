import { createGlobalStyle } from 'styled-components';
import './scroll.css';

export const GlobalStyle = createGlobalStyle`
	*, ::before, ::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Russo One', sans-serif;
		font-size: 15px;
	}
	body {
		overflow-x: hidden;
	}
	ul {
		list-style: none;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`;
