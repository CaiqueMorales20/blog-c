// Styled Components
import { MenuS, MenuLink } from "./style";

// Functional Component
export const Menu = () => {
	// Rendering
	return (
		<MenuS>
			<MenuLink href="">Home</MenuLink>
			<MenuLink href="">CSS</MenuLink>
			<MenuLink href="">React</MenuLink>
		</MenuS>
	);
};
