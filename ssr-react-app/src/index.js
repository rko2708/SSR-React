import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

console.log("in index js calling Layout component");
const data = document.getElementById("server-data").innerHTML;
console.log("data", data);
ReactDOM.hydrate(
	<Router>
		<Layout data={data} />
	</Router>,
	document.getElementById("root")
);
