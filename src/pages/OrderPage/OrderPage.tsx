import { useState } from 'react';
import styled from 'styled-components';
import { Container, Flex } from '../../styled/mixins';
import MainLayout from '../../components/layout/MainLayout';
import Calendar from '../../components/Calendar/Calendar';
import OrderForm from '../../components/OrderForm/OrderForm';
import { Modal } from '../../components/Modal/Modal';

const PageContainer = styled.div`
	${Container({})}
	${Flex({ justify: 'space-between' })}
	margin-top: 140px;
`;

const OrderPage = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<MainLayout pageNumber={2} pageTitle={'Scegli Giorno'}>
			<PageContainer>
				<Calendar />
				<OrderForm onModalOpen={() => setIsModalOpen(true)} />
			</PageContainer>
			<Modal isOpen={isModalOpen}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi
				voluptatum in porro, harum debitis beatae dolor esse, sunt modi ea vero
				obcaecati cumque culpa laboriosam id minima dolorum nemo.
			</Modal>
		</MainLayout>
	);
};

export default OrderPage;
