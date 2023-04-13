// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./global/GlobalStyle";

// Imported Components
import { Header } from "./components/Header";

// Styled Components
import { PageContainer } from "./global/GlobalStyle";

// Rendering
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* Global Style */}
		<GlobalStyle />
		{/* Header */}
		<Header />
		{/* App */}
		<PageContainer>
			<App />
		</PageContainer>
	</React.StrictMode>
);
