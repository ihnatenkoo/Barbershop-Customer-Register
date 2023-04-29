import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppSelector } from '../../hooks';
import Button from '../ui/Button';
import { Flex } from '../../styled/mixins';
import styled from 'styled-components';

const Form = styled.form`
	${Flex({ direction: 'column', gap: '23px 0' })}
`;

const Label = styled.label`
	${Flex({ direction: 'column', gap: '10px 0' })}
	span {
		font-size: 16px;
		padding-left: 12px;
		font-family: 'Roboto';
	}
`;

const Input = styled.input`
	padding: 16px;
	box-shadow: 0 0 12px rgb(0 0 0 / 15%);
	border-radius: 15px;
	border: none;
	width: 280px;
	font-family: 'Roboto';
	font-size: 16px;

	&:focus {
		outline-color: ${(props) => props.theme.colors.accent};
		outline-style: solid;
		outline-width: 3px;
	}
`;

const FormButton = styled(Button)`
	align-self: flex-end;
`;

const OrderForm: FC = () => {
	const [orderInfo, setOrderInfo] = useState({
		orderTime: '',
		customerName: '',
		comment: '',
		phone: '',
	});

	const currentMasterID = useAppSelector(
		(state) => state.order.currentMaster?._id
	);

	const orderDay = useAppSelector((state) => state.order.orderDay);

	const handleOrderInfoChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setOrderInfo({
			...orderInfo,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		if (!orderDay || !currentMasterID) {
			return;
		}
	};

	return (
		<Form onSubmit={onSubmitForm}>
			<Label>
				<span>Scegli lora? (time)</span>
				<Input
					type="text"
					name="orderTime"
					value={orderInfo.orderTime}
					onChange={handleOrderInfoChange}
				/>
			</Label>

			<Label>
				<span>Come ti chiami? (name)</span>
				<Input
					type="text"
					name="customerName"
					onChange={handleOrderInfoChange}
					value={orderInfo.customerName}
				/>
			</Label>

			<Label>
				<span>E-mail:</span>
				<Input
					type="text"
					name="Email"
					onChange={handleOrderInfoChange}
					value={orderInfo.phone}
				/>
			</Label>

			<Label>
				<span> Numero di telefono:</span>
				<Input
					type="text"
					name="phone"
					onChange={handleOrderInfoChange}
					value={orderInfo.phone}
				/>
			</Label>

			<FormButton disabled>AVANTI</FormButton>
		</Form>
	);
};

export default OrderForm;
