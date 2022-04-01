import React from "react";

import styles from "./styles/Landing.module.css";

function Landing() {
	return (
		<div className={styles.landing_container}>
			<div className={styles.intro_card}>
				<h1 data-aos="fade-in">Hey, how's it going</h1>
				<h4 data-aos="fade-in" data-aos-delay="1000">
					Pleased to meet you
				</h4>
				<h2 data-aos="fade-in" data-aos-delay="2200">
					&#128516;
				</h2>
			</div>
		</div>
	);
}

export default Landing;
