// Imports
import styled from "styled-components";

// Styled Components
export const HeroS = styled.section`
	margin-top: 6rem;
`;

export const HeroContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 2rem;

	& > *:first-of-type {
		grid-row: span 2;
	}

	@media screen and (width < 1080px) {
		grid-template-columns: 1fr;
	}
`;
