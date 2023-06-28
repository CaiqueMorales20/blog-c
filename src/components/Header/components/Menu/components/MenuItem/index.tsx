// Styled Components
import { useContext } from "react";
import { MenuItemS, MenuLink } from "./style";

// Types
import { MenuItemProps } from "./types";

// Context
import { MenuContext } from "../..";
import { MenuContextProps } from "../../types";

// Functional Component
export const MenuItem = (props: MenuItemProps) => {
	// Variables
	const { setOpenedMenu } = useContext(MenuContext) as MenuContextProps;

	// Rendering
	return (
		<MenuItemS>
			<MenuLink onClick={() => setOpenedMenu(false)} to={props.link}>
				{props.text}
			</MenuLink>
		</MenuItemS>
	);
};
