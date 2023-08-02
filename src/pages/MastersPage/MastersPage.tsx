import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { Container } from '../../styled/mixins';
import { IMaster, IService } from '../../types';
import { getMasters } from '../../mock-data/masters';
import { getServices } from '../../mock-data/services';
import MainLayout from '../../components/layout/MainLayout';
import MastersList from '../../components/Master/MastersList';
import ServicesList from '../../components/ServicesList/ServicesList';
import Button from '../../components/ui/Button';

const PageContainer = styled.div`
	${Container({})}
`;

const Note = styled.p`
	margin: 5px 0;
	font-family: 'Rubik', sans-serif;
	font-size: 11px;
	font-weight: 100;
	color: ${(props) => props.theme.colors.gray};
`;

const ButtonWrapper = styled.div`
	margin-top: 20px;
	text-align: center;
	@media ${(props) => props.theme.media.tablet} {
		margin-top: 0px;
		text-align: right;
	}
`;

const MastersPage = () => {
	const [masters, setMasters] = useState<Array<IMaster> | null>(null);
	const [services, setServices] = useState<Array<IService> | null>(null);
	const selectedServices = useAppSelector(
		(state) => state.order.selectedServices
	);

	useEffect(() => {
		const getDataWithDelay: ReturnType<typeof setTimeout> = setTimeout(() => {
			setMasters(getMasters());
			setServices(getServices());
		}, 1250);
		return () => clearTimeout(getDataWithDelay);
	}, []);

	return (
		<MainLayout pageNumber={1} pageTitle={'Scegli Barbiere'}>
			<PageContainer>
				<MastersList masters={masters} />
				<ServicesList services={services} />

				<Note>** A partire da</Note>
				<ButtonWrapper>
					<Button path="/order" disabled={!selectedServices.length}>
						AVANTI
					</Button>
				</ButtonWrapper>
			</PageContainer>
		</MainLayout>
	);
};

export default MastersPage;
