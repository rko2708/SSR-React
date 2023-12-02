import fs from "fs";
import Layout from "../src/Layout";
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import path from "path";
import { StaticRouter as Router } from "react-router-dom/server";

const app = express();
const PORT = process.env.PORT || 3001;

const routes = ["/", "/about"];

app.get(routes, (req, res) => {
	const context = {};
	console.log("before content", req.url);
	const content = renderToString(
		<Router location={req.url} context={context}>
			<Layout />
		</Router>
	);
	console.log("content", content, context);
	if (context.url) {
		console.log("context url", context.url);
		res.writeHead(301, {
			Location: context.url,
		});
		res.end();
	}
	console.log("after contents", content);
	const indexFile = path.resolve("./build/index.html");
	const embedded_data = JSON.stringify({ data: "data" });

	fs.readFile(indexFile, "utf8", (err, data) => {
		if (err) {
			console.error("Something went wrong:", err);
			return res.status(500).send("Oops, better luck next time!");
		}

		return res.send(
			data.replace(
				'<div id="root"></div>',
				`<div id="root"><script id="server-data">${embedded_data}</script>${content}</div>`
			)
		);
	});
	// res.writeHead(200, { "Content-Type": "text/html" });
});

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
