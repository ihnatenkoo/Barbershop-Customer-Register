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
	padding: 8px 0;
	border: 2px solid #f3bf1b;
	border-radius: 15px;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.accent};
	cursor: pointer;
	outline: none;
	user-select: none;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 17px;
	transition: all 0.15s ease-in;

	&:hover {
		text-decoration: underline;
	}

	${(props) =>
		props.disabled &&
		css`
			pointer-events: none;
			opacity: 0.5;
			color: ${(props) => props.theme.colors.accent};
			background-color: transparent;
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
			{path ? <Link to={path}>{children}</Link> : <>{children}</>}
		</StyledButton>
	);
};

export default Button;
