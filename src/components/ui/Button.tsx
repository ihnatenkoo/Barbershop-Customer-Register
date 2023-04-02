import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Flex } from '../../styled/mixins';

interface IActiveBtn {
	disabled: boolean;
}

const StyledButton = styled.button<IActiveBtn>`
	${Flex({
		display: 'inline-flex',
		justify: 'center',
		align: 'center',
	})}

	border: ${(props) => `2px solid ${props.theme.colors.white}`};
	border-radius: 15px;
	color: ${(props) => props.theme.colors.white};
	background: ${(props) => props.theme.gradients.main80};
	cursor: pointer;
	outline: none;
	user-select: none;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 17px;
	transition: all 0.15s linear;

	&:hover {
		text-decoration: underline;
	}

	> a,
	span {
		padding: 8px 0;
		width: 100%;
	}

	${(props) =>
		props.disabled &&
		css`
			pointer-events: none;
			opacity: 0.5;
			color: ${(props) => props.theme.colors.grayLight};
			border: ${(props) => `2px solid ${props.theme.colors.grayLight}`};
			background: ${(props) => props.theme.colors.white};
		`};

	@media ${(props) => props.theme.media.mobileL} {
		width: 300px;
	}
	@media ${(props) => props.theme.media.tablet} {
		width: 180px;
	}
`;

interface IButtonProps {
	children: ReactNode;
	disabled?: boolean;
	path?: string;
	className?: string;
	onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
	children,
	disabled = false,
	path,
	className,
	onClick,
}) => {
	return (
		<StyledButton disabled={disabled} className={className} onClick={onClick}>
			{path ? <Link to={path}>{children}</Link> : <span>{children}</span>}
		</StyledButton>
	);
};

export default Button;
