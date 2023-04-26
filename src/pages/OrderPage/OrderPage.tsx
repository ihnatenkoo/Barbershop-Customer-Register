import styled from 'styled-components';
import { Container } from '../../styled/mixins';
import MainLayout from '../../components/layout/MainLayout';

const PageContainer = styled.div`
	${Container({ width: '770px' })}
`;

const OrderPage = () => {
	return (
		<MainLayout pageNumber={2} pageTitle={'Scegli Giorno'}>
			<PageContainer>Order Page</PageContainer>
		</MainLayout>
	);
};

export default OrderPage;
