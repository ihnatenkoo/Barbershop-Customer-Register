import { FC, useEffect, useState, MouseEvent } from 'react';
import { Label, Time, Name, Cost, CheckBox } from './styled';

import { addService } from '../../store/order/order.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IService } from '../../types';

interface IServiceItem {
  service: IService;
}

const ServiceItem: FC<IServiceItem> = ({ service }) => {
  const dispatch = useAppDispatch();
  const currentMaster = useAppSelector((state) => state.order.currentMaster);
  const { service: serviceName, price, time, _id, masters } = service;

  const [isActiveService, setIsActiveService] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    masters.some((master) => master === currentMaster?._id)
      ? setIsActiveService(true)
      : setIsActiveService(false);

    setIsChecked(false);
  }, [currentMaster, masters, dispatch]);

  const onClickHandler = (e: MouseEvent<HTMLLabelElement>, _id: string) => {
    e.preventDefault();
    setIsChecked((prev) => !prev);
    dispatch(addService({service: serviceName}));
  };

  return (
		<Label
			disabled={!isActiveService}
			isChecked={isChecked}
			onClick={(e) => onClickHandler(e, _id)}
		>
			<Time>{time} min</Time>
			<Name>{serviceName}</Name>
			<Cost>{price} €</Cost>
			<CheckBox type="checkbox" value={serviceName} />
		</Label>
	);
};

export default ServiceItem;
