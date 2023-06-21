// Imports
import styled from "styled-components";

// Styled Components
export const HeroS = styled.section`
	--mt: 6rem;

	margin-top: var(--mt);
	min-height: calc(100vh - var(--header-height) - var(--mt));

	@media screen and (max-width: 1080px) {
		--mt: 1rem;
		margin-bottom: 8em;
	}
`;

export const HeroContent = styled.div`
	--columns-number: 2;
	--rows-number: 2;

	width: 100%;
	display: grid;
	grid-template-columns: repeat(var(--columns-number), 1fr);
	grid-template-rows: repeat(var(--rows-number), 1fr);
	gap: 2rem;

	& > *:first-of-type {
		grid-row: span 2;
	}

	// Card Animation
	&:has(*:hover) > * {
		opacity: 0.6;
	}

	& > *:hover {
		opacity: 1;
	}

	@media screen and (max-width: 1080px) {
		--columns-number: 1;
	}
`;
