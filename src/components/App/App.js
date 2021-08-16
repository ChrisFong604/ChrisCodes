import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import ProjectsJSON from "./projects.json";
import AboutPage from "../About/About";
import NavBar from "../NavBar/NavBar";
import MainHeader from "./MainHeader/MainHeader";

import ProjectCSS from "../Projects/ProjectsTour.module.css";

function App() {
	const ref = useRef(null);
	const [projects, setProjects] = useState([]);
	const numProjects = ProjectsJSON.length;
	useEffect(() => {
		setProjects(ProjectsJSON);
	}, []);
	const projectLayer = { display: "flex", alignItems: "center" };
	return (
		<Parallax ref={ref} pages={5 + numProjects} className="main-container">
			<ParallaxLayer offset={0} speed={1}>
				<MainHeader />
			</ParallaxLayer>
			<ParallaxLayer
				sticky={{ start: 0, end: 10 }}
				style={{ display: "flex", alignItems: "center", zIndex: "0" }}
			>
				<NavBar parallax={ref} />
			</ParallaxLayer>

			<ParallaxLayer offset={1.5} speed={1}>
				<AboutPage />
			</ParallaxLayer>
			<ParallaxLayer
				sticky={{ start: 2.5, end: 3 + numProjects }}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "left",
					zIndex: "0",
					pointerEvents: "none",
				}}
			>
				<div style={{ marginLeft: "15%", width: "30%" }}>
					<p>Here are some things I am involved in</p>
				</div>
			</ParallaxLayer>
			<div className="projects-container">
				{projects.map((project, index) => (
					<ParallaxLayer
						key={project._id}
						offset={index + 3}
						speed={1.2}
						style={{ ...projectLayer, justifyContent: "flex-end" }}
					>
						<div key={project._id} className={ProjectCSS.project_card}>
							<h3>{project.name}</h3>
							<a href={project.source} rel="noreferrer" target="_blank">
								Source
							</a>
							<p className={ProjectCSS.project_desc}>{project.flavourtext}</p>
						</div>
					</ParallaxLayer>
				))}
			</div>
		</Parallax>
	);
}

export default App;
