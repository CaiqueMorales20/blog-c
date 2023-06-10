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
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2em;
	width: 100%;

	@media screen and (max-width: 1080px) {
		grid-template-columns: 1fr;
	}
`;

export const TitleS = styled.h2`
	color: #efefef;
	font-size: 16px;
	font-weight: 400;
`;
