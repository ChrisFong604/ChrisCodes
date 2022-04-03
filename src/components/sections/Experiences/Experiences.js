import React, { useEffect, useState } from "react";
import { useSpring, a } from "react-spring";

import styles from "./FlipCard.module.css";
import ExperiencesJSON from "../../../resources/experiences.json";

function ExperienceCard({ experience, id }) {
	const [flipped, setFlip] = useState(false);

	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 350, friction: 80 },
	});

	return (
		<>
			<div
				key={id}
				data-aos="fade-left"
				className={styles.flipcontainer}
				onClick={() => setFlip((state) => !state)}
			>
				<a.div
					className={`${styles.card} ${styles.description}`}
					style={{ opacity: opacity.to((o) => 1 - o), transform }}
				>
					<h1>{experience.organization}</h1>
				</a.div>
				<a.div
					className={`${styles.card} ${styles.description}`}
					style={{
						opacity,
						transform,
						rotateX: "180deg",
					}}
				>
					<h4>{experience.description}</h4>
				</a.div>
			</div>
		</>
	);
}
function Experiences() {
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		setExperiences(ExperiencesJSON);
	}, [experiences]);

	return (
		<>
			<div
				data-aos="fade-right"
				data-aos-delay="500"
				data-aos-easing="ease-in-out"
				data-aos-duration="1250"
			>
				<h1>Here are some places I've been</h1>
			</div>
			{experiences.map((experience, index) => (
				<ExperienceCard experience={experience} id={index} />
			))}
		</>
	);
}

export default Experiences;
