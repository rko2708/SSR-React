import React, { useState } from "react";
import { Link } from "react-router-dom";

const AppServer = () => {
	console.log('in AppServer component home route');
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Hello there from Server-Side Rendered React App!</h1>
			<p>Counter: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<Link to="/about">About</Link>
		</div>
	);
};
export default AppServer;
