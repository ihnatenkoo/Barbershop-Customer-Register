import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IModalProps {
	children?: ReactNode;
	isOpen: boolean;
}

type IModalStyledProps = Pick<IModalProps, 'isOpen'>;

const ModalContainer = styled.div<IModalStyledProps>`
	position: fixed;
	inset: 0;
	opacity: 0;
	z-index: -1;

	${(props) =>
		props.isOpen &&
		`
		opacity: 1;
		pointer-events: auto;
		z-index: 10;
		`}
`;

const ModalOverlay = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div<IModalStyledProps>`
	padding: 20px;
	border-radius: 8px;
	background-color: white;
	transform: scale(0.3);
	transition: transform 0.25s ease-in;

	${(props) => props.isOpen && `transform: scale(1);`}
`;

export const Modal: FC<IModalProps> = ({ children, isOpen }) => {
	return (
		<ModalContainer isOpen={isOpen}>
			<ModalOverlay>
				<ModalContent isOpen={isOpen}>{children}</ModalContent>
			</ModalOverlay>
		</ModalContainer>
	);
};
