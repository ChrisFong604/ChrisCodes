import React from "react";
import Landing from "./sections/Landing/Landing";
import Intro from "./sections/Intro/Intro";
import Experiences from "./sections/Experiences/Experiences";

import "../index.css";

function App() {
	return (
		<div className="main-container">
			<Landing />
			<Intro />
		</div>
	);
}

export default App;
