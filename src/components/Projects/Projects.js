import React, { useEffect, useState, Fragment } from "react";
import logo from "../App/logo.svg";
import axios from "axios";

import ProjectCSS from "./Projects.module.css";

function ProjectRenderer() {
	const get_projects_url = "http://localhost:9000/projects/";
	const [projects, setProjects] = useState([]);

	let content = "Bob";

	useEffect(() => {
		axios.get(get_projects_url).then((res) => {
			setProjects(res.data.map((project) => project));
		});
	}, []);

	if (projects) {
		content = (
			<>
				{projects.map((project) => (
					<div key={project._id} className={ProjectCSS.grid_container}>
						<div
							className={ProjectCSS.project_card}
							data-aos="fade-right"
							data-aos-duration="1100"
						>
							<h3>{project.name}</h3>
							<a href={project.source}>Github</a>
						</div>
						<div
							className={ProjectCSS.project_description}
							data-aos="fade-in"
							data-aos-delay="800"
						>
							<p>{project.description}</p>
							<p>{project.tools}</p>
						</div>
					</div>
				))}
			</>
		);
	}

	return <ul>{content}</ul>;
}

export default ProjectRenderer;
