import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';

import PageInfo from '../../components/ui/PageInfo';

const Main = styled.main`
	${Flex({ justify: 'center', align: 'center' })}
	min-width: 100vw;
	min-height: 100vh;
`;

const Box = styled.section`
	${Flex({ direction: 'column', justify: 'center', align: 'center' })}
	position: relative;
	width: 980px;
	max-width: 90%;
	height: 700px;
	box-shadow: 0 0 12px rgb(0 0 0 / 15%);
	border-radius: 5px;
`;

interface IMainLayoutProps {
	children: ReactNode;
	pageNumber: number;
	pageTitle: string;
}

const MainLayout: FC<IMainLayoutProps> = ({
	children,
	pageNumber,
	pageTitle,
}) => {
	return (
		<Main>
			<Box>
				<PageInfo pageNumber={pageNumber} pageTitle={pageTitle} />
				{children}
			</Box>
		</Main>
	);
};

export default MainLayout;
