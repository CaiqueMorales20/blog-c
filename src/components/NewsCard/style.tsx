// Imports
import styled from "styled-components";

// Styled Components
export const NewsCardS = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	border-radius: 0.5em;
	overflow: hidden;
	cursor: pointer;
`;

export const ImageContainer = styled.div`
	width: 100%;
	aspect-ratio: 2 / 1;
	overflow: hidden;
	display: flex;
	align-items: center;
`;

export const ImageS = styled.img`
	&:hover {
		scale: 1.05;
	}
`;

export const TextContainer = styled.div`
	background-color: #353a46;
	width: 100%;
	padding: 1em 3em;

	@media screen and (min-width: 1080px) {
		min-height: 5rem;
	}
`;

export const TextS = styled.h3`
	color: #efefef;
	font-size: var(--fz-small);
	font-weight: 400;
`;
