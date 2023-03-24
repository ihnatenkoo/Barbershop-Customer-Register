import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*, ::before, ::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Russo One', sans-serif;
		font-size: 15px;
	}
	ul {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	body {
		overflow-x: hidden;
	}
`;
