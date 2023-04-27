import { FC, useEffect } from 'react';
import ReactCalendar from 'react-calendar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addOrderDay } from '../../store/order/order.slice';
import { selectUnformattedCurrentDate } from '../../store/order/selectors';
import { calculateInitialDate } from '../../utils/calculateInitialDate';
import './calendar.css';

const Calendar: FC = () => {
	const dispatch = useAppDispatch();
	const orderDay = useAppSelector(selectUnformattedCurrentDate);

	useEffect(() => {
		dispatch(addOrderDay(calculateInitialDate()));
	}, []);

	const onDateChange = (pickedDate: Date): void => {
		dispatch(addOrderDay(pickedDate));
	};

	return (
		<ReactCalendar
			onChange={onDateChange}
			value={orderDay}
			locale="it"
			minDate={calculateInitialDate()}
			minDetail="month"
			tileDisabled={({ activeStartDate, date, view }) =>
				date.getDay() == 6 || date.getDay() == 0
			}
		/>
	);
};

export default Calendar;
