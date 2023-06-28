// Styled Components
import { useContext } from "react";
import { MenuItemS, MenuLink } from "./style";

// Types
import { MenuItemProps } from "./types";

// Context
import { HeaderContext } from "../../../..";
import { HeaderContextProps } from "../../../../types";

// Functional Component
export const MenuItem = (props: MenuItemProps) => {
	// Variables
	const { setOpenedMenu } = useContext(HeaderContext) as HeaderContextProps;

	// Rendering
	return (
		<MenuItemS>
			<MenuLink onClick={() => setOpenedMenu(false)} to={props.link}>
				{props.text}
			</MenuLink>
		</MenuItemS>
	);
};
