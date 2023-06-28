// Styled Components
import { HamburgerContainer, HamburgerIcon } from "./style";

// Types
import { HamburgerBtnProps } from "./types";

// Images
import MenuWhite from "../../../../assets/img/header/menu_white.png";

// Functional Component
export const HamburgerBtn = (props: HamburgerBtnProps) => {
	// Rendering
	return (
		<HamburgerContainer onClick={props.onClick}>
			<HamburgerIcon src={MenuWhite} title={props.title} />
		</HamburgerContainer>
	);
};
