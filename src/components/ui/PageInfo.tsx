import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';

const Wrap = styled.div`
	${Flex({ align: 'center' })}
	height: 45px;
	position: absolute;
	top: 31px;
	left: 0;
	font-family: 'Rubik', sans-serif;
`;

const Number = styled.div`
	${Flex({ align: 'center', justify: 'flex-end' })}
	margin-right: 10px;
	width: 65px;
	height: 100%;
	font-family: inherit;
	background-color: ${(props) => props.theme.colors.accent};
	& span {
		margin-right: 10px;
		font-family: inherit;
		font-size: 20px;
		font-weight: 500;
		color: ${(props) => props.theme.colors.white};
	}
`;

const Text = styled.div`
	margin-right: 15px;
	font-family: inherit;
	font-size: 20px;
	font-weight: 300;
	color: ${(props) => props.theme.colors.accent};
`;

const Title = styled.div`
	font-family: inherit;
	font-size: 15px;
	font-weight: 300;
`;

interface IPageInfo {
	pageNumber: number;
	pageTitle: string;
}

const PageInfo: FC<IPageInfo> = ({ pageNumber, pageTitle }) => {
	return (
		<Wrap>
			<Number>
				<span>{pageNumber}</span>
			</Number>
			<Text>PASSO</Text>
			<Title>{pageTitle}</Title>
		</Wrap>
	);
};

export default PageInfo;
