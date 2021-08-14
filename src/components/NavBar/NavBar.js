import React from "react";
import { Link } from "react-router-dom";

import NavCSS from "./NavBar.module.css";

function NavBarRenderer() {
	return (
		<nav className={NavCSS.navbar}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBarRenderer;
