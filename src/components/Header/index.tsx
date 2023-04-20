// Imported Components
import { Input } from "./components/Input";
import { Menu } from "./components/Menu";

// Styled Components
import { HeaderContent, HeaderS, Logo } from "./style";

// Functional Component
export const Header = () => {
	// Rendering
	return (
		<HeaderS>
			<HeaderContent>
				<Logo href="">BlogC</Logo>
				<Input placeholder="Procurar notícias" />
				<Menu />
			</HeaderContent>
		</HeaderS>
	);
};
