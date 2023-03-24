import styled from 'styled-components';
import MainLayout from '../../components/layout/MainLayout';
import { Container } from '../../styled/mixins';

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

const Masters = () => {
	return (
		<MainLayout pageNumber={1} pageTitle={'Scegli Barbiere'}>
			<PageContainer>
				<p>Masters</p>
				<p>Services</p>

				<Note>** A partire da</Note>
				<ButtonWrapper>
					<button>AVANTI</button>
				</ButtonWrapper>
			</PageContainer>
		</MainLayout>
	);
};

export default Masters;
