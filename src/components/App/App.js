import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import ProjectsJSON from "./projects.json";
import ProjectsTour from "../Projects/ProjectsTour";
import AboutPage from "../About/About";
import NavBar from "../NavBar/NavBar";
import ContactPage from "../Contact/Contact";
import MainHeader from "./MainHeader/MainHeader";

function App() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		setProjects(ProjectsJSON);
	}, []);

	return (
		<Parallax pages={10} className="main-container">
			<ParallaxLayer offset={0} speed={1}>
				<MainHeader />
			</ParallaxLayer>
			<ParallaxLayer sticky={{ start: 1, end: 10 }}>
				<NavBar />
			</ParallaxLayer>

			<ParallaxLayer offset={1.5} speed={0.6}>
				<AboutPage />
			</ParallaxLayer>
			<ParallaxLayer
				sticky={{ start: 3, end: 6.5 }}
				style={{ display: "flex", alignItems: "center" }}
			>
				<div style={{ marginLeft: "12%" }}>
					<h3>Here are some projects that I am involved in</h3>
				</div>
			</ParallaxLayer>
			<ProjectsTour projects={projects} />
		</Parallax>
	);
}

export default App;
