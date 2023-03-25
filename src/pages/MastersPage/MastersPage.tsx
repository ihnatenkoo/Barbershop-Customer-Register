import { Container } from '../../styled/mixins';
import styled from 'styled-components';
import MainLayout from '../../components/layout/MainLayout';
import MastersList from '../../components/Master/MastersList';
import { masters } from '../../mock-data/masters';

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
	return (
		<MainLayout pageNumber={1} pageTitle={'Scegli Barbiere'}>
			<PageContainer>
				<MastersList masters={masters} />
				<p>Services</p>

				<Note>** A partire da</Note>
				<ButtonWrapper>
					<button>AVANTI</button>
				</ButtonWrapper>
			</PageContainer>
		</MainLayout>
	);
};

export default MastersPage;
