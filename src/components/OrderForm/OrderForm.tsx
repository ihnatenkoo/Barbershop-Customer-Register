/* eslint-disable no-nonoctal-decimal-escape */
import { FC, MouseEvent, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { freeOrderTime } from '../../mock-data/time';
import { isValidEmail } from '../../utils/validateEmail';
import { Flex, Input as InputFiled } from '../../styled/mixins';
import Button from '../ui/Button';

const Form = styled.form`
	${Flex({ direction: 'column', gap: '24px 0' })}
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
	${InputFiled()}
`;
const PhoneInput = styled(InputMask)`
	${InputFiled()}
`;

const TimeList = styled.ul`
	padding: 8px 0;
	position: absolute;
	width: 100%;
	height: 312px;
	top: 85px;
	border-radius: 15px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: 0 0 12px rgb(0 0 0 / 15%);
	overflow-y: scroll;
	z-index: 1;
`;

const TimeItem = styled.li`
	padding: 8px 8px 8px 16px;
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.white};
		color: ${(props) => props.theme.colors.accent};
		box-shadow: 0px 0px 8px -3px rgba(0, 0, 0, 0.75);
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
	const [isShowTimePopup, setIsShowTimePopup] = useState<boolean>(false);
	const [time, setTime] = useState<string>(freeOrderTime[0]);

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	//TODO: show errors
	console.log(errors);

	const currentMasterID = useAppSelector(
		(state) => state.order.currentMaster?._id
	);
	const orderDay = useAppSelector((state) => state.order.orderDay);

	const onSubmitForm = (data: FormData): void => {
		console.log({ ...data, time, orderDay });

		if (!orderDay || !currentMasterID) {
			return;
		}

		console.log({ time, ...data });
	};

	const onToggleTimePopup = () => {
		setIsShowTimePopup((prevState) => !prevState);
	};

	const onChangeTime = (e: MouseEvent) => {
		setTime((e.target as HTMLLIElement).innerText);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmitForm)}>
			<Label style={{ position: 'relative' }}>
				<span>Scegli lora? (time)</span>
				<Input value={time} readOnly onClick={onToggleTimePopup} />
				{isShowTimePopup && (
					<TimeList>
						{freeOrderTime.map((time) => (
							<TimeItem onClick={onChangeTime} key={time}>
								{time}
							</TimeItem>
						))}
					</TimeList>
				)}
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
				<Controller
					name="phone"
					control={control}
					rules={{
						required: 'Mobile number is required',
						pattern: {
							value: /^\+39 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
							message: 'Wrong mobile number',
						},
					}}
					render={({ field }) => (
						<PhoneInput mask="+3\9 (999) 999-99-99" {...field} />
					)}
				/>
			</Label>

			<FormButton>AVANTI</FormButton>
		</Form>
	);
};

export default OrderForm;
