import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/';
import { IMaster } from '../../types';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';
import {
	clearServicesList,
	setCurrentMaster,
} from '../../store/order/order.slice';
import Master from '../../components/Master/Master';
import MasterSkeleton from '../../components/Master/MasterSkeleton';

const MastersWrapper = styled.ul`
	${Flex({ justify: 'space-around' })}
	margin-top: 105px;
	list-style: none;
	@media ${(props) => props.theme.media.tablet} {
		margin-top: 80px;
	}
`;

interface IMastersListProps {
	masters: Array<IMaster> | null;
}

const MastersList: FC<IMastersListProps> = ({ masters }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (masters && masters?.length > 0) {
			selectMasterHandler(masters[0]);
		}
	}, [masters]);

	const selectMasterHandler = (master: IMaster): void => {
		dispatch(setCurrentMaster(master));
		dispatch(clearServicesList());
	};

	return (
		<MastersWrapper>
			{masters ? (
				<>
					{masters.map((master) => (
						<li key={master._id} onClick={() => selectMasterHandler(master)}>
							<Master master={master} />
						</li>
					))}
				</>
			) : (
				[...new Array(2)].map((_, i) => <MasterSkeleton key={i} />)
			)}
		</MastersWrapper>
	);
};

export default MastersList;
