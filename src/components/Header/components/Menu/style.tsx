// Imports
import styled from "styled-components";

import { Menu } from "@styled-icons/entypo/Menu";

// Styled Components
export const MenuS = styled.ul`
	display: flex;
	gap: 1em;

	@media screen and (max-width: 768px) {
		// Position and size
		position: fixed;
		right: 0;
		bottom: 0;
		top: 0;
		width: 70vw;
		height: 100vh;
		z-index: 999;

		// Style
		background-color: #363c47;
		align-items: center;
		justify-content: center;
	}
`;

export const Hamburger = styled(Menu)`
	width: 40px;
`;
