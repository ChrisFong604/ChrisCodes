import React from "react";
import { useSpring, animated } from "react-spring";

import "./NavBar.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";

import { KeyboardArrowUp } from "@material-ui/icons";

function ChainExample({ icon }) {
	const styles = useSpring({
		loop: true,
		to: [
			{ opacity: 1, color: "#1a84cd" },
			{ opacity: 1, color: "#00d4ff" },
			{ opacity: 1, color: "#8bffd1" },
			{ opacity: 1, color: "#00d4ff" },
			{ opacity: 1, color: "#1a84cd" },
			{ opacity: 0.5, color: "#003ead" },
			{ opacity: 0, color: "#003ead" },
		],
		from: { opacity: 0, color: "#003ead" },
		config: { duration: 2000 },
	});
	// ...
	if (icon === true)
		return (
			<animated.div style={styles}>
				<UnfoldLessIcon />
			</animated.div>
		);
	else
		return (
			<animated.div style={styles}>
				<UnfoldMoreIcon />
			</animated.div>
		);
}

function NavBar({ parallax, expandInformation, expandCallback }) {
	return (
		<div className="nav-container">
			<ul className="nav-list">
				<li>
					<button onClick={() => parallax.current.scrollTo(0)}>
						<KeyboardArrowUp fontSize="large" />
					</button>
				</li>
				<li>
					<button onClick={() => parallax.current.scrollTo(1.22)}>About</button>
				</li>
				<li>
					<button onClick={() => parallax.current.scrollTo(2.95)}>
						Experiences
					</button>
				</li>
				<li>
					<button onClick={() => parallax.current.scrollTo(5.94)}>
						Projects
					</button>
				</li>
				<li>
					<a
						href="https://github.com/chrisfong604"
						target="_blank"
						rel="noreferrer"
					>
						<GitHubIcon />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/chrisfong604/"
						target="_blank"
						rel="noreferrer"
					>
						<LinkedInIcon />
					</a>
				</li>

				<li>
					<a href="mailto: ccffoonngg@gmail.com">
						<ContactMailIcon />
					</a>
				</li>
				<li>
					<button
						onClick={() => {
							console.log(expandInformation);
							expandCallback(!expandInformation);
						}}
					>
						<ChainExample icon={expandInformation} />
					</button>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
