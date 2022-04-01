import React from "react";
import FlipCard from "../../ui/flipcard/FlipCard";
import styles from "./styles/Intro.module.css";

function Intro() {
	return (
		<div className={styles.intro_container}>
			<div
				className="side_by_side"
				data-aos="fade-right"
				data-aos-delay="500"
				data-aos-easing="ease-in-out"
				data-aos-duration="1250"
			>
				<h4 className="left_side">What's up to those that know me </h4>
				<h2 className="left_side">&#9995;</h2>
			</div>

			<div
				className="side_by_side"
				data-aos="fade-left"
				data-aos-delay="500"
				data-aos-easing="ease-in-out"
				data-aos-duration="1250"
			>
				<div className="right_side">
					<h4>
						And to those that don't, I'll introduce myself. My name Christopher
						Fong, but you can call me Chris!{" "}
					</h4>
					<h4>
						I'm currently studying as a CS student at SFU, but I have a passion
						for software engineering
					</h4>
				</div>
			</div>

			<div
				className="side_by_side"
				data-aos="fade-right"
				data-aos-delay="500"
				data-aos-easing="ease-in-out"
				data-aos-duration="1250"
			>
				<div className="left_side">
					<h4>I have an interest in distributed systems.</h4>
					<h4>
						I enjoy designing and optimizing networks of systems, and am really
						considering focusing on software architecture!
					</h4>
				</div>
			</div>

			<div
				className="side_by_side"
				data-aos="fade-right"
				data-aos-delay="500"
				data-aos-easing="ease-in-out"
				data-aos-duration="1250"
			>
				<h2 className="left_side">Here are some places I've been</h2>
				<FlipCard />
				<FlipCard />
				<FlipCard />
				<FlipCard />
				<FlipCard />
				<h3>ASGSAGGAS</h3>
			</div>
		</div>
	);
}

export default Intro;
