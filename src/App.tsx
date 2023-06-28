// Imported Components
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

// Styled Components
import { GlobalStyle, PageContainer } from "./global/GlobalStyle";
import { useEffect } from "react";

// Functional Components
export const App = () => {
	// Functions
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Rendering
	return (
		<>
			{/* Global Style */}
			<GlobalStyle />
			{/* Header */}
			<Header />
			{/* App */}
			<PageContainer>
				<Outlet />
			</PageContainer>
		</>
	);
};
