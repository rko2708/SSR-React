import React from "react";
import App from "./App";
import AppServer from "./AppServer";
import { Route, Routes } from "react-router-dom";

const Layout = (props) => {
	console.log("in Layout component all routes", props);
	return (
		// <Router>
			<Routes>
				<Route path="/about" element={<App />} />
				<Route path="/" index exact element={<AppServer />} />
			</Routes>
		// </Router>
	);
};

export default Layout;
