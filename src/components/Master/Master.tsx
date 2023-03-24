import { FC } from 'react';
import { Flex } from '../../styled/mixins';
import styled, { css } from 'styled-components';
import { gradientAnimate } from '../../styled/animations';

interface PropsActiveMaster {
	active?: boolean;
}

const Main = styled.div`
	${Flex({ direction: 'column', align: 'center' })}
	width: 150px;
	cursor: pointer;
`;

const Photo = styled.img`
	width: 115px;
	height: 115px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
`;

const Name = styled.div<PropsActiveMaster>`
	font-size: 20px;
	text-align: center;
	word-break: break-word;
	word-wrap: break-word;
	overflow-wrap: break-word;
	opacity: 0.2;
	transition: all 0.4s linear;
	${(props) =>
		props.active &&
		css`
			opacity: 1;
		`}
`;

const Wrapper = styled.div<PropsActiveMaster>`
	margin-bottom: 10px;
	position: relative;
	filter: blur(2px) grayscale(0.25);
	transition: all 0.3s ease-in;
	${(props) =>
		props.active &&
		css`
			filter: none;
		`}
`;

const Circle = styled.div<PropsActiveMaster>`
	${Flex({ justify: 'center', align: 'center' })}
	width: 127px;
	height: 127px;
	border-radius: 50%;
	box-shadow: 0 2.5px 19.8px hsl(0deg 0% 46% / 23%);
	${(props) =>
		props.active &&
		css`
			filter: none;
			background: linear-gradient(180deg, #f3bf1b, #ff007a);
			animation: ${gradientAnimate} 2s infinite linear;
		`}
`;

interface IMasterProps {
	photoLink: string;
	name: string;
}

const Master: FC<IMasterProps> = ({ photoLink, name }) => {
	const activeMaster = true;

	return (
		<Main>
			<Wrapper active={activeMaster}>
				<Circle active={activeMaster}></Circle>
				<Photo src={photoLink} />
			</Wrapper>

			<Name active={activeMaster}>{name}</Name>
		</Main>
	);
};

export default Master;
