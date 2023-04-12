// Imports
import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./global/GlobalStyle";

// Rendering
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
