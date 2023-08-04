import styled from 'styled-components';
import { Container, Flex } from '../../styled/mixins';
import MainLayout from '../../components/layout/MainLayout';
import Calendar from '../../components/Calendar/Calendar';
import OrderForm from '../../components/OrderForm/OrderForm';

const PageContainer = styled.div`
	${Container({})}
	${Flex({ justify: 'space-between' })}
	margin-top: 140px;
`;

const OrderPage = () => {
	return (
		<MainLayout pageNumber={2} pageTitle={'Scegli Giorno'}>
			<PageContainer>
				<Calendar />
				<OrderForm />
			</PageContainer>
		</MainLayout>
	);
};

export default OrderPage;
