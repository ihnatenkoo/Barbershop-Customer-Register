import { Container } from '../../styled/mixins';
import styled from 'styled-components';
import MainLayout from '../../components/layout/MainLayout';
import MastersList from '../../components/Master/MastersList';
import { useEffect, useState } from 'react';
import { getMasters } from '../../mock-data/masters';
import { IMaster, IService } from '../../types';
import { getServices } from '../../mock-data/services';
import ServicesList from '../../components/ServicesList/ServicesList';

const PageContainer = styled.div`
	${Container({ width: '770px' })}
`;

const Note = styled.p`
	margin-top: 5px;
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

	useEffect(() => {
		let getDataWithDelay: ReturnType<typeof setTimeout>;
		getDataWithDelay = setTimeout(() => {
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
					<button>AVANTI</button>
				</ButtonWrapper>
			</PageContainer>
		</MainLayout>
	);
};

export default MastersPage;
