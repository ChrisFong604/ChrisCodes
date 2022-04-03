import Experiences from "../Experiences/Experiences";
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
				<h3 className="left_side">What's up to those that know me </h3>
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
					<h3>
						And to those that don't, I'll introduce myself. My name Christopher
						Fong, but you can call me Chris!{" "}
					</h3>
					<h3>
						I'm currently studying as a CS student at SFU, but I am super into
						web development on the outside at the moment
					</h3>
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
					<h3>I have an interest in distributed systems.</h3>
					<h3>
						I enjoy designing and optimizing networks of systems, and am really
						considering focusing on software architecture!
					</h3>
				</div>
			</div>
			<Experiences />
		</div>
	);
}

export default Intro;
