// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// App
import { App } from "./App";

// Imported Components
import { Header } from "./components/Header";
import { GlobalStyle } from "./global/GlobalStyle";

// Styled Components
import { PageContainer } from "./global/GlobalStyle";

// Screens
import { LandingPage } from "./screens/LandingPage";
import { CssPage } from "./screens/CssPage";
import { ReactPage } from "./screens/ReactPage";

// Router
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "css",
				element: <CssPage />,
			},
			{
				path: "react",
				element: <ReactPage />,
			},
		],
	},
]);

// Rendering
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
