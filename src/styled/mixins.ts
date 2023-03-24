import { css } from 'styled-components';

interface IFlexProps {
	justify?: string;
	align?: string;
	direction?: string;
	gap?: string;
	wrap?: string;
}

export const Flex = ({
	justify,
	align,
	direction,
	gap,
	wrap,
}: IFlexProps) => css`
	display: flex;
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
	width: ${width || '1200px'};
	margin: 0 auto;
	max-width: 100%;
`;
