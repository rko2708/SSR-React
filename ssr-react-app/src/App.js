import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  console.log('in App component about route');
	useEffect(() => {
		console.log("i am hydrated");
	}, []);

	return (
		<div className="App">
			Hello World
			<button onClick={() => console.log("mai chl gya")}>Click Me</button>
			<Link to="/">Home</Link>
		</div>
	);
}

export default App;
