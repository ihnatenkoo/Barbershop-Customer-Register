import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';
import { IService } from '../../types';
import ServiceItem from '../ServiceItem/ServiceItem';
import ServicesListSkeleton from './ServicesListSkeleton';

const Main = styled.div`
	${Flex({
		direction: 'column',
		wrap: 'no-wrap',
		align: 'center',
		gap: '10px 0',
	})}
	margin: 30px auto 0;
	padding: 20px 18px 20px 0;
	box-shadow: ${(props) => props.theme.shadows.md};
	border-radius: 15px;
	height: max-content;

	@media ${(props) => props.theme.media.tablet} {
		flex-wrap: wrap;
		height: 310px;
		gap: 8px 0;
	}
`;

interface IServicesListProps {
	services: Array<IService> | null;
}

const ServicesList: FC<IServicesListProps> = ({ services }) => {
	return (
		<Main>
			{services ? (
				services.map((service) => (
					<ServiceItem key={service._id} service={service} />
				))
			) : (
				<ServicesListSkeleton />
			)}
		</Main>
	);
};

export default ServicesList;
