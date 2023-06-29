// Imports
import { createContext, useState } from "react";

// Imported Components
import { Input } from "./components/Input";
import { Menu } from "./components/Menu";

// Styled Components
import { HeaderContent, HeaderS, Logo } from "./style";
import { HeaderContextProps } from "./types";

// Context
export const HeaderContext = createContext<HeaderContextProps | null>(null);

// Functional Component
export const Header = () => {
	// Variables
	const [openedMenu, setOpenedMenu] = useState(false);
	const [search, setSearch] = useState("");

	// Rendering
	return (
		<HeaderContext.Provider
			value={{ openedMenu, setOpenedMenu, search, setSearch }}
		>
			<HeaderS>
				<HeaderContent>
					<Logo to="/">BlogC</Logo>
					<Input placeholder="Procurar" />
					<Menu />
				</HeaderContent>
			</HeaderS>
		</HeaderContext.Provider>
	);
};
