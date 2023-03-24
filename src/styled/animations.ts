import { keyframes } from 'styled-components';

export const fadeInText = keyframes`	
0% {
	opacity: 0.25;
}

100% {
		opacity: 1;
}
`;
export const fadeOutText = keyframes`	
0% {
	opacity: 1;
}

100% {
		opacity: 0.25;
}
`;

export const gradientAnimate = keyframes`	
0% {
	transform: rotate(0);
}

100% {
	transform: rotate(360deg);
}
`;
