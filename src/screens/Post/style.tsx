// Imports
import { styled } from "styled-components";

// Styled Components
export const PostS = styled.main`
	margin-top: 4em;
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export const TitleS = styled.h1`
	font-size: 1.5rem;
`;

export const ImageS = styled.img`
	width: min(100%, 40rem);
`;

export const DescriptionS = styled.p`
	width: min(100%, 40rem);
	color: #cacaca;
	text-align: justify;
`;
