import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ProjectCSS from "./ProjectsPage.module.css";

function ProjectsTour({ projects }) {
	const [parallaxScroll, setParallaxScroll] = useState(true);

	return (
		<div>
			{projects.map((project, index) => (
				<ParallaxLayer key={project._id} offset={index + 3} speed={1.2}>
					<div key={project._id} className={ProjectCSS.grid_container}>
						<div className={ProjectCSS.project_card}>
							<h3>{project.name}</h3>
							<a href={project.source} rel="noreferrer" target="_blank">
								Github
							</a>
						</div>
						<div className={ProjectCSS.project_description}>
							<p>{project.flavourtext}</p>
							<p>{index + 3}</p>
						</div>
					</div>
				</ParallaxLayer>
			))}
		</div>
	);
}

export default ProjectsTour;
