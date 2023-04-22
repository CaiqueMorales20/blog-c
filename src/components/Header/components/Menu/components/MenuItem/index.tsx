// Styled Components
import { MenuItemS, MenuLink } from "./style";

// Types
import { MenuItemProps } from "./types";

// Functional Component
export const MenuItem = (props: MenuItemProps) => {
	// Rendering
	return (
		<MenuItemS>
			<MenuLink href={props.link}>{props.text}</MenuLink>
		</MenuItemS>
	);
};
