import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import NavBarRenderer from "../NavBar/NavBar";
import StaticHeader from "./StaticHeader/StaticHeader";
import ProjectsTour from "../Projects/ProjectsTour";
import ProjectsPage from "../Projects/ProjectsPage";
import AboutPage from "../About/About";
import ContactRenderer from "../Contact/Contact";
import MainHeader from "./MainHeader/MainHeader";

function App() {
	return (
		<Router>
			<></>
			{/*
					A <Switch> looks through all its children <Route>
					elements and renders the first one whose path
					matches the current URL. Use a <Switch> any time
					you have multiple routes, but you want only one
					of them to render at a time
					Switch is invisible on the page
				*/}
			<Switch>
				<Route exact path="/">
					<Parallax>
						<ParallaxLayer offset={0.08} speed={1}>
							<MainHeader />
						</ParallaxLayer>
						<ParallaxLayer offset={1.5} speed={0.6}>
							<AboutPage />
						</ParallaxLayer>
						<ProjectsTour />
					</Parallax>
				</Route>
				<Route path="/projects">
					<ProjectsPage />
				</Route>
				<Route path="/About">
					<AboutPage />
				</Route>
				<Route path="/contact">
					<ContactRenderer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
