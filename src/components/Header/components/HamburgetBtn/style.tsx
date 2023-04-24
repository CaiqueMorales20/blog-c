// Imports
import styled from "styled-components";

// Icons
import { Menu } from "@styled-icons/entypo/Menu";

// Styled Components
export const HamburgerContainer = styled.div``;

export const HamburgerIcon = styled(Menu)`
	width: 1.5rem;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
