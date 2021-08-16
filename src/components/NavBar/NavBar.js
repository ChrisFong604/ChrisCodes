import React from "react";

import "./NavBar.css";

import { ParallaxLayer } from "@react-spring/parallax";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import { KeyboardArrowUp } from "@material-ui/icons";

import ChevronUp from "../../resources/icons/chevron-up.svg";
function NavBar() {
	return (
		<div className="nav-container">
			<ul className="nav-list">
				<li>
					<KeyboardArrowUp fontSize="large" />
				</li>
				<li>About</li>
				<li>Projects</li>
				<li>Contact Me</li>
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
					<a
						href="https://instagram.com/isrly_chris"
						target="_blank"
						rel="noreferrer"
					>
						<InstagramIcon />
					</a>
				</li>
				<li>
					<a href="mailto: ccffoonngg@gmail.com">
						<ContactMailIcon />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
