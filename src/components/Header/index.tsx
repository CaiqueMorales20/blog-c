// Styled Components
import { Input } from "./components/Input";
import { HeaderContent, HeaderS } from "./style";

// Functional Component
export const Header = () => {
	// Rendering
	return (
		<HeaderS>
			<HeaderContent>
				<p>Blog C</p>
				<Input placeholder="Search" />
				<p>Menu</p>
			</HeaderContent>
		</HeaderS>
	);
};

