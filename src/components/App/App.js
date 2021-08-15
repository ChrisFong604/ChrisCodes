import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import ProjectsJSON from "./projects.json";
import ProjectsTour from "../Projects/ProjectsTour";
import AboutPage from "../About/About";
import ContactRenderer from "../Contact/Contact";
import MainHeader from "./MainHeader/MainHeader";

function App() {
	const [totalPages, setTotalPages] = useState(2.5);
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
				<h3>SideNav here</h3>
			</ParallaxLayer>

			<ParallaxLayer offset={1.5} speed={0.6}>
				<AboutPage />
			</ParallaxLayer>
			<ParallaxLayer sticky={{ start: 3, end: 10 }}>
				<div>
					<p>Here are some things that I've been working on!</p>
				</div>
			</ParallaxLayer>
			<ProjectsTour projects={projects} />
		</Parallax>
	);
}

export default App;
