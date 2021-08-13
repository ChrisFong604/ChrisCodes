import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import NavBarRenderer from "../NavBar/NavBar";
import StaticHeader from "./StaticHeader/StaticHeader";
import ProjectRenderer from "../Projects/Projects";
import AboutRenderer from "../About";
import ContactRenderer from "../Contact/Contact";

function App() {
	return (
		<Router>
			<div className="main-container">
				<NavBarRenderer />

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
						<div
							className={"App"}
							data-aos="fade-in"
							data-aos-easing="linear"
							data-aos-duration="1600"
						>
							<header className="App-header">
								<h1>Chris.</h1>
								<img
									src={logo}
									className="App-logo"
									alt="logo"
									position="none"
								/>
							</header>
							<ProjectRenderer />
						</div>
					</Route>
					<Route path="/projects">
						<StaticHeader Header={"Projects"} />
						<ProjectRenderer />
					</Route>
					<Route path="/About">
						<StaticHeader Header={"About"} />
						<AboutRenderer />
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
