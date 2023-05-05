// Imports
import styled from "styled-components";

// Styled Components
export const NewsS = styled.div`
	--mt: 6rem;
	margin-top: var(--mt);
	min-height: calc(100vh - var(--mt));

	@media screen and (max-width: 1080px) {
		--mt: 1rem;
	}
`;
