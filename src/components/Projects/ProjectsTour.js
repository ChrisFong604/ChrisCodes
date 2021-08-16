import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ProjectCSS from "./ProjectsTour.module.css";

function ProjectsTour({ projects }) {
	const [parallaxScroll, setParallaxScroll] = useState(true);

	const projectLayer = { display: "flex", alignItems: "center" };
	return (
		<div>
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
							Github
						</a>
						<p className={ProjectCSS.project_desc}>{project.flavourtext}</p>
					</div>
				</ParallaxLayer>
			))}
		</div>
	);
}

export default ProjectsTour;
