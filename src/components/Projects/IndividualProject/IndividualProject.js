import React, { useState, useEffect } from "react";

import axios from "axios";

function IndividualProjectRenderer({ id }) {
	const [project, setProject] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost/9000/projects/${id}`)
			.then((res) => setProject(res.data));
	}, [id]);

	return (
		<div>
			<h1>{project.name}</h1>
		</div>
	);
}

export default IndividualProjectRenderer;
