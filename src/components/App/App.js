import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
			<NavBarRenderer />

			<div className="main-container">
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
						<MainHeader />
						<AboutPage />
						<ProjectsPage />
					</Route>
					<Route path="/projects">
						<StaticHeader Header={"Projects"} />
						<ProjectsPage />
					</Route>
					<Route path="/About">
						<StaticHeader Header={"About"} />
						<AboutPage />
					</Route>
					<Route path="/contact">
						<StaticHeader Header={"Contact Me"} />
						<ContactRenderer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
