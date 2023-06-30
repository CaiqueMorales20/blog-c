// Imported Components
import { useLocation } from "react-router-dom";
import { Hero } from "./components/Hero";
import { News } from "./components/News";
import { useEffect, useState } from "react";
import { PageTransition } from "../../global/GlobalStyle";

// Functional Component
export const LandingPage = () => {
	// Variables
	const location = useLocation();
	const [reloadAnimation, setReloadAnimation] = useState(true);

	useEffect(() => {
		setReloadAnimation(!reloadAnimation);
	}, [location]);

	// Rendering
	return (
		<>
			{reloadAnimation && <PageTransition reversed />}
			{!reloadAnimation && <PageTransition reversed />}
			<Hero />
			<News />
		</>
	);
};
