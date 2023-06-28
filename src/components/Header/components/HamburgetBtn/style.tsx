// Imports
import styled from "styled-components";

// Styled Components
export const HamburgerContainer = styled.div`
	&:nth-of-type(1) {
		position: absolute;
		top: 0;
		right: 10vw;
		height: var(--header-height);

		display: flex;
		align-items: center;
	}
`;

export const HamburgerIcon = styled.img`
	width: 1.5rem;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
