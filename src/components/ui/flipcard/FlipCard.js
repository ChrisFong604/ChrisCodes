import React, { useState } from "react";
import { useSpring, a } from "react-spring";

// import styles from "./FlipCard.module.css";

function FlipCard({ side }) {
	const [flipped, setFlip] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 },
	});

	return (
		<div
			data-aos="fade-left"
			className="right_side flipcard"
			onClick={() => setFlip((state) => !state)}
		>
			<a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
				<p>WHASGSAHSAH</p>
			</a.div>
			<a.div
				style={{
					opacity,
					transform,
					rotateX: "180deg",
				}}
			>
				<p>OOGABOOGA?</p>
			</a.div>
		</div>
	);
}

export default FlipCard;
