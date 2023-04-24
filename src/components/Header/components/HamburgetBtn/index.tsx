// Styled Components
import { HamburgerContainer, HamburgerIcon } from "./style";

// Types
import { HamburgerBtnProps } from "./types";

// Functional Component
export const HamburgerBtn = (props: HamburgerBtnProps) => {
	// Rendering
	return (
		<HamburgerContainer onClick={props.onClick}>
			<HamburgerIcon title={props.title} />
		</HamburgerContainer>
	);
};
