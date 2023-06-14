// Imports
import styled, { css } from "styled-components";

// Types
export type MenuProps = {
	opened: boolean;
};

export const MenuS = styled.ul<MenuProps>`
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
		transform: ${(props) => (props.opened ? "0%" : "translateX(100%)")};

		// Style
		background-color: #363c47;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		&:before {
			position: fixed;
			inset: 0;
			width: 100vw;
			height: 100vh;
			content: "";
			background-color: #00000050;
		}

		// Position of HamburgerBtn
		& > *:first-child {
			position: absolute;
			top: 0;
			right: 10vw;
			height: var(--header-height);

			display: flex;
			align-items: center;
		}
	}
`;
