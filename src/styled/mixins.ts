import { css } from 'styled-components';

interface IFlexProps {
	display?: string;
	justify?: string;
	align?: string;
	direction?: string;
	gap?: string;
	wrap?: string;
}

export const Flex = ({
	display,
	justify,
	align,
	direction,
	gap,
	wrap,
}: IFlexProps) => css`
	display: ${display || 'flex'};
	flex-wrap: ${wrap || 'no-wrap'};
	flex-direction: ${direction || 'row'};
	justify-content: ${justify || 'stretch'};
	align-items: ${align || 'stretch'};
	gap: ${gap || '0 0'};
`;

interface IContainerProps {
	width?: string;
}

export const Container = ({ width }: IContainerProps) => css`
	width: ${width || '770px'};
	margin: 0 auto;
	max-width: 100%;
`;

export const Input = () => css`
	padding: 16px;
	box-shadow: 0 0 12px rgb(0 0 0 / 15%);
	border-radius: 15px;
	border: none;
	width: 280px;
	font-family: 'Roboto';
	font-size: 16px;

	&:focus {
		outline-color: ${(props) => props.theme.colors.accent};
		outline-style: solid;
		outline-width: 3px;
	}
`;
