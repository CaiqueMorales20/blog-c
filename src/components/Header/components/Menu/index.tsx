// Imports
import { useState, useEffect } from "react";

// Imported Components
import { MenuItem } from "./components/MenuItem";

// Styled Components
import { MenuS, Hamburger } from "./style";

// Functional Component
export const Menu = () => {
	// Variables
	const [mobile, setMobile] = useState<number>(0);

	// Functions
	useEffect(() => {
		window.addEventListener("resize", () => {
			setMobile(window.innerWidth);
		});
	});

	// Rendering
	return (
		<MenuS>
			{mobile < 768 ? (
				<Hamburger />
			) : (
				<>
					<MenuItem link="" text="Home" />
					<MenuItem link="" text="CSS" />
					<MenuItem link="" text="React " />
				</>
			)}
		</MenuS>
	);
};
