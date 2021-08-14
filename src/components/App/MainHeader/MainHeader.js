import React, { Fragment, useState } from "react";
import logo from "../logo.svg";
import chevronD from "../../../resources/icons/chevron-down.svg";
import chevronU from "../../../resources/icons/chevron-up.svg";
import profilePic from "../../../resources/images/profilepic.jpg";
import { useTrail, a } from "@react-spring/web";

import "./MainHeader.css";

function Trail({ headIncrement, children }) {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		opacity: headIncrement ? 1 : 0,
		x: headIncrement ? 0 : 20,
		height: headIncrement ? 110 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

	return (
		<div>
			{trail.map(({ height, ...style }, index) => (
				<a.div key={index} style={style}>
					<a.div style={{ height }}>{items[index]}</a.div>
				</a.div>
			))}
		</div>
	);
}

const MainHeader = () => {
	const [headIncrement, setHeadIncrement] = useState(false);

	return (
		<>
			<div className={"App"}>
				<header className="App-header color">
					<h1>Chris.</h1>
					<img src={logo} className="App-logo" alt="logo" position="none" />
				</header>
				<img src={profilePic} className="profile-pic" alt="chrisfong!"></img>
				<h1>How do people describe me?</h1>
				<button
					onClick={() => setHeadIncrement((headIncrement) => !headIncrement)}
					style={{ margin: "4vh" }}
				>
					<img
						src={headIncrement ? chevronU : chevronD}
						alt="reveal-adjectives"
					></img>
				</button>

				<Trail headIncrement={headIncrement}>
					<h2>Eager.</h2>
					<h2>Resourceful.</h2>
					<h2>Diligent</h2>
					<h1>Curious</h1>
				</Trail>
			</div>
		</>
	);
};

export default MainHeader;
