import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import ProjectsJSON from "./projects.json";
import ExperiencesJSON from "./experiences.json";

import AboutPage from "../About/About";
import NavBar from "../NavBar/NavBar";
import MainHeader from "./MainHeader/MainHeader";

import ProjectCSS from "../Projects/ProjectsTour.module.css";
import "../Experiences/Experiences.css";

function App() {
	const ref = useRef(null);
	const [projects, setProjects] = useState([]);
	const [experiences, setExperiences] = useState([]);
	const [expandInformation, setExpandInformation] = useState(false);

	const numProjects = ProjectsJSON.length;
	const numExperiences = ExperiencesJSON.length;
	const dynamicPages = numProjects + numExperiences;

	useEffect(() => {
		setProjects(ProjectsJSON);
		setExperiences(ExperiencesJSON);
	}, []);

	const projectLayer = { display: "flex", alignItems: "center" };
	return (
		<Parallax ref={ref} pages={6 + dynamicPages} className="main-container">
			<ParallaxLayer offset={0} speed={1}>
				<MainHeader />
			</ParallaxLayer>
			<ParallaxLayer
				sticky={{ start: 0, end: 6 + dynamicPages }}
				style={{ display: "flex", alignItems: "center", zIndex: "0" }}
			>
				<NavBar
					parallax={ref}
					expandInformation={expandInformation}
					expandCallback={setExpandInformation}
				/>
			</ParallaxLayer>

			<ParallaxLayer offset={1.5} speed={1}>
				<AboutPage />
			</ParallaxLayer>
			<ParallaxLayer
				sticky={{ start: 2.5, end: 3 + numExperiences }}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "left",
					zIndex: "0",
					pointerEvents: "none",
				}}
			>
				<div style={{ marginLeft: "15%", width: "30%" }}>
					<p>Here are some places I've been</p>
				</div>
			</ParallaxLayer>
			<div>
				{experiences.map((experience, index) => (
					<ParallaxLayer
						offset={index + 3}
						speed={1}
						style={{ ...projectLayer, justifyContent: "flex-end" }}
					>
						<div key={experience.organization} className="experience-card">
							<h2>{experience.organization}</h2>
							<h3 style={{ opacity: "65%" }}>{experience.title}</h3>
							<p className="experience-desc">
								{expandInformation
									? experience.description
									: experience.flavourtext}
							</p>
						</div>
					</ParallaxLayer>
				))}
			</div>

			<ParallaxLayer
				sticky={{ start: 3.5 + numExperiences, end: 4.5 + dynamicPages }}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "left",
					zIndex: "0",
					pointerEvents: "none",
				}}
			>
				<div style={{ marginLeft: "15%", width: "30%" }}>
					<span>
						<p>
							And some things I am working on! All projects are visible on my
							Github &#128516;
						</p>
					</span>
					<br></br>
					<span>
						<p style={{ opacity: "70%" }}>
							All projects are visible on my Github!
						</p>
					</span>
				</div>
			</ParallaxLayer>

			<div>
				{projects.map((project, index) => (
					<ParallaxLayer
						key={project._id}
						offset={index + 4 + numExperiences}
						speed={1.2}
						style={{ ...projectLayer, justifyContent: "flex-end" }}
					>
						<div key={project._id} className={ProjectCSS.project_card}>
							<h3>{project.name}</h3>
							<p className={ProjectCSS.project_desc}>
								{expandInformation ? project.description : project.flavourtext}
							</p>
						</div>
					</ParallaxLayer>
				))}
			</div>

			<ParallaxLayer
				offset={5 + dynamicPages}
				speed={1}
				style={{ ...projectLayer, justifyContent: "center" }}
			>
				<div>
					<h3>Handcrafted by Christopher Fong © 2021. All Rights Reserved</h3>
				</div>
			</ParallaxLayer>
		</Parallax>
	);
}

export default App;
