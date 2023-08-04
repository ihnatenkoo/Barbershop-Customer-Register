import styled, { css } from 'styled-components';
import { fadeInText, fadeOutText } from '../../styled/animations';
import { Flex } from '../../styled/mixins';

interface PropsActiveService {
	disabled: boolean;
	isChecked: boolean;
}

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
	appearance: none;
	position: absolute;
`;

export const Time = styled.span`
	margin-right: 5px;
	width: 33px;
	font-family: 'Rubik', sans-serif;
	font-size: 9px;
	font-weight: 300;
	user-select: none;
	color: ${(props) => props.theme.colors.gray};
`;

export const Cost = styled.span`
	margin-right: 5px;
	width: auto;
	font-family: 'Rubik', sans-serif;
	font-size: 12px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.black};
`;

export const Name = styled.span`
	flex: 1 1 auto;
	font-family: 'Rubik', sans-serif;
	font-size: 13px;
	font-weight: 500;
	animation: ${fadeInText} 0.35s ease-in-out;

	@media ${(props) => props.theme.media.mobileM} {
		font-size: 15px;
	}
`;

export const Label = styled.label<PropsActiveService>`
	${Flex({
		justify: 'space-between',
		align: 'center',
	})}
	position: relative;
	width: 95%;
	cursor: pointer;
	user-select: none;

	@media ${(props) => props.theme.media.tablet} {
		width: 330px;
	}

	${(props) =>
		props.disabled &&
		css`
			pointer-events: none;

			${Name} {
				animation: ${fadeOutText} 0.35s ease-in-out forwards;
			}
			${Cost} {
				opacity: 0.25;
				color: ${(props) => props.theme.colors.gray};
			}
		`};

	${(props) =>
		props.isChecked &&
		css`
			${Name}, ${Cost} {
				color: ${(props) => props.theme.colors.accent};
			}
		`};

	&::before {
		content: '';
		display: block;
		width: 18px;
		height: 18px;

		border: 1px solid rgba(0, 0, 0, 0.12);
		border-radius: 3px;
		background-color: rgba(0, 0, 0, 0.02);
		transition: background-color 0.1s ease-in;
		box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.07);
		${(props) =>
			props.disabled &&
			css`
				border: none;
				background-color: rgba(0, 0, 0, 0.01);
				box-shadow: inset 0px 0px 2px 0 rgba(0, 0, 0, 0.07);
			`};
		${(props) =>
			props.isChecked &&
			css`
				box-shadow: none;
				border-color: ${(props) => props.theme.colors.accent};
				background-color: ${(props) => props.theme.colors.accent};
			`};

		position: absolute;
		top: 0;
		right: -18px;
		z-index: 1;
	}

	:after {
		content: '';
		display: block;
		width: 18px;
		height: 18px;
		background: url('icons/check.svg') no-repeat;
		background-size: 18px 18px;

		opacity: 0;
		transition: opacity 0.2s ease-in;
		${(props) =>
			props.isChecked &&
			css`
				opacity: 1;
			`};

		position: absolute;
		top: -1px;
		right: -18px;
		z-index: 2;
	}
`;
