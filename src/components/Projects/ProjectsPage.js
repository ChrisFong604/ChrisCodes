import React, { useState, useEffect } from "react";
import ProjectCSS from "./ProjectsPage.module.css";

function ProjectsPage() {
	const projects = [
		{
			_id: "611369682279a12a50d0e502",
			name: "BGC Workload Management System",
			flavourtext: "Client-commissioned resource management app",
			description:
				"Created for BGC Engineering, this project was designed as a resource management tool for the project management team",
			tools: "Built with Spring Boot, Maven, and ChartJS. Deployed to Heroku",
			source: "https://github.com/ChrisFong604/BGCWorkloadManagementSystem",
			__v: 0,
		},
		{
			_id: "61136ebac6d82216b8ea311d",
			name: "UBC Course Explorer",
			flavourtext: "Centralized course information for UBC students",
			description:
				"An application built that aims to provide an one-stop interface for UBC students to find course information, including professor ratings, grade distribution, and nested prerequisite courses, in hopes of helping them better plan out their study path throughout university.",
			tools: "Built using Django, and a variety of APIs",
			source: "https://github.com/patrick-5546/ubc-course-explorer",
			__v: 0,
		},
		{
			_id: "6114b9b3ad356b475c6aa062",
			name: "Best By",
			flavourtext:
				"Mobile food-management system with recipe suggestions and more",
			description:
				"A mobile application that allows users to manage their food inventory. Comes with a variety of features, such as expiration date notifiers, ingredient categorization, and recipe suggestions",
			tools: "Built using purely React Native",
			source: "https://github.com/ChrisFong604/BestBy",
			__v: 0,
		},
		{
			_id: "61160f8830280e1070f11abf",
			name: "Personal Portfolio",
			flavourtext: "Yup. Don't need to explain too much :)",
			description:
				"The project that you are viewing right now, Initially created as my first foray into full-stack development, it is undergoing constant design and creative changes.",
			tools: "React, Express.js, MongoDB, Node.js",
			source: "http://github.com/ChrisFong604",
			__v: 0,
		},
	];

	return (
		<div>
			{projects.map((project) => (
				<div key={project._id} className={ProjectCSS.grid_container}>
					<div
						className={ProjectCSS.project_card}
						data-aos="fade-right"
						data-aos-duration="1100"
					>
						<h3>{project.name}</h3>
						<a href={project.source} rel="noreferrer" target="_blank">
							Github
						</a>
					</div>
					<div
						className={ProjectCSS.project_description}
						data-aos="fade-in"
						data-aos-delay="800"
					>
						<p>{project.flavourtext}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default ProjectsPage;
