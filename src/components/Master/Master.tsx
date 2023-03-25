import { FC } from 'react';
import { Flex } from '../../styled/mixins';
import styled, { css } from 'styled-components';
import { gradientAnimate } from '../../styled/animations';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IMaster } from '../../types';
import { setCurrentMaster } from '../../store/order/order.slice';

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
	master: IMaster;
}

const Master: FC<IMasterProps> = ({ master }) => {
	const dispatch = useAppDispatch();
	const currentMaster = useAppSelector((state) => state.order.currentMaster);
	const { _id, name, avatar } = master;

	const isActiveMaster = (
		currentMasterId: string | undefined,
		masterId: string
	): boolean => currentMasterId === masterId;

	const onChangeMaster = (master: IMaster): void => {
		dispatch(setCurrentMaster(master));
	};

	return (
		<Main onClick={() => onChangeMaster(master)}>
			<Wrapper active={isActiveMaster(currentMaster?._id, _id)}>
				<Circle active={isActiveMaster(currentMaster?._id, _id)}></Circle>
				<Photo src={avatar} />
			</Wrapper>

			<Name active={isActiveMaster(currentMaster?._id, _id)}>{name}</Name>
		</Main>
	);
};

export default Master;
