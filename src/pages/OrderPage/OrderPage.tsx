import styled from 'styled-components';
import { Container } from '../../styled/mixins';
import MainLayout from '../../components/layout/MainLayout';
import Calendar from '../../components/Calendar/Calendar';

const PageContainer = styled.div`
	${Container({})}
`;

const OrderPage = () => {
	return (
		<MainLayout pageNumber={2} pageTitle={'Scegli Giorno'}>
			<PageContainer>
				<Calendar />
			</PageContainer>
		</MainLayout>
	);
};

export default OrderPage;
