import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ProjectCSS from "./ProjectsTour.module.css";

function ProjectsTour({ projects }) {
	const projectLayer = { display: "flex", alignItems: "center" };
	return (
		<div className="projects-container">
			<ParallaxLayer
				sticky={{ start: 3, end: 6.5 }}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "left",
				}}
			>
				<div style={{ marginLeft: "15%", width: "30%" }}>
					<p>Here are some projects that I am involved in</p>
				</div>
			</ParallaxLayer>
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
	);
}

export default ProjectsTour;
