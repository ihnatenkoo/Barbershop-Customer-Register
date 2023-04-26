import { FC } from 'react';
import ReactCalendar from 'react-calendar';
import { useAppDispatch } from '../../hooks';
import { addOrderDay } from '../../store/order/order.slice';
import './calendar.css';

const Calendar: FC = () => {
	const dispatch = useAppDispatch();

	const onDateChange = (pickedDate: Date): void => {
		dispatch(addOrderDay(pickedDate));
	};

	return (
		<ReactCalendar
			onChange={onDateChange}
			value={new Date()}
			locale="it"
			minDetail="month"
			tileDisabled={({ activeStartDate, date, view }) =>
				date.getDay() == 6 || date.getDay() == 0
			}
		/>
	);
};

export default Calendar;
