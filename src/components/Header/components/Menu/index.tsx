// Imports
import { useState, useEffect, useRef } from "react";

// Imported Components
import { HamburgerBtn } from "../HamburgetBtn";
import { MenuItem } from "./components/MenuItem";
import { Link } from "react-router-dom";

// Styled Components
import { MenuS } from "./style";

// Functional Component
export const Menu = () => {
	// Variables
	const [mobile, setMobile] = useState<number>(window.innerWidth);
	const [openedMenu, setOpenedMenu] = useState<boolean>(false);
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	// Functions
	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target))
					setOpenedMenu(false);
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	// Functions
	useEffect(() => {
		window.addEventListener("resize", () => {
			setMobile(window.innerWidth);
		});
	});

	// Rendering
	return (
		<>
			{mobile < 768 && (
				<HamburgerBtn title="Abrir menu" onClick={() => setOpenedMenu(true)} />
			)}
			<MenuS ref={wrapperRef} opened={openedMenu}>
				<HamburgerBtn
					title="Fechar menu"
					onClick={() => setOpenedMenu(false)}
				/>
				<MenuItem link="/" text="Home" />
				<MenuItem link="css" text="CSS" />
				<MenuItem link="react" text="React" />
			</MenuS>
		</>
	);
};
