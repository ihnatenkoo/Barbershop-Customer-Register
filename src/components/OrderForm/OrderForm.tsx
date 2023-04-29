import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppSelector } from '../../hooks';
import Button from '../ui/Button';
import { Flex } from '../../styled/mixins';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { isValidEmail } from '../../utils/validateEmail';

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

interface FormData {
	orderTime: string;
	customerName: string;
	email: string;
	phone: number;
}

const OrderForm: FC = () => {
	const [orderInfo, setOrderInfo] = useState({
		orderTime: '',
		customerName: '',
		email: '',
		phone: '',
	});

	const { register, handleSubmit } = useForm<FormData>();

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

	const onSubmitForm = (data: FormData): void => {
		console.log(data);
		// e.preventDefault();
		// if (!orderDay || !currentMasterID) {
		// 	return;
		// }
	};

	return (
		<Form onSubmit={handleSubmit(onSubmitForm)}>
			<Label>
				<span>Scegli lora? (time)</span>
				<Input
					name="orderTime"
					value={orderInfo.orderTime}
					onChange={handleOrderInfoChange}
				/>
			</Label>

			<Label>
				<span>Come ti chiami? (name)</span>
				<Input
					{...register('customerName', {
						required: true,
						minLength: 3,
						maxLength: 20,
						pattern: /^[A-Za-z]+$/i,
					})}
				/>
			</Label>

			<Label>
				<span>E-mail:</span>
				<Input
					{...register('email', {
						required: true,
						validate: { isValidEmail },
					})}
				/>
			</Label>

			<Label>
				<span> Numero di telefono:</span>
				<Input
					type="number"
					name="phone"
					onChange={handleOrderInfoChange}
					value={orderInfo.phone}
				/>
			</Label>

			<FormButton>AVANTI</FormButton>
		</Form>
	);
};

export default OrderForm;
