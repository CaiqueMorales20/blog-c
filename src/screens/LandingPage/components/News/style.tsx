// Imports
import styled from "styled-components";

// Styled Components
export const NewsS = styled.div`
	--mt: 6rem;
	margin-top: var(--mt);
	min-height: calc(100vh - var(--mt));
	display: flex;
	flex-direction: column;
	gap: 3em;

	@media screen and (max-width: 1080px) {
		--mt: 1rem;
	}
`;

export const NewsContent = styled.div`
	--columns-number: 3;

	display: grid;
	grid-template-columns: repeat(var(--columns-number), 1fr);
	gap: 2em;
	width: 100%;

	@media screen and (max-width: 1080px) {
		--columns-number: 1;
	}

	// Card Animation
	&:has(*:hover) > * {
		opacity: 0.5;
	}

	& > *:hover {
		opacity: 1;
	}
`;

export const TitleS = styled.h2`
	color: #efefef;
	font-size: var(--fz-large);
	font-weight: 400;
`;
