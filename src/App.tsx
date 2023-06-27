// Imported Components
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

// Styled Components
import { GlobalStyle, PageContainer } from "./global/GlobalStyle";

// Functional Components
export const App = () => {
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
