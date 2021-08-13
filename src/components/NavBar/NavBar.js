import React from "react";
import { Link } from "react-router-dom";

import NavCSS from "./NavBar.module.css";

function NavBarRenderer() {
	return (
		<nav className={NavCSS.navbar}>
			<ul>
				<li data-aos="fade-in" data-aos-delay="1200" data-aos-duration="600">
					<Link to="/">Home</Link>
				</li>
				<li data-aos="fade-in" data-aos-delay="1700" data-aos-duration="600">
					<Link to="/projects">Projects</Link>
				</li>
				<li data-aos="fade-in" data-aos-delay="2200" data-aos-duration="600">
					<Link to="/about">About</Link>
				</li>
				<li data-aos="fade-in" data-aos-delay="2700" data-aos-duration="600">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBarRenderer;
