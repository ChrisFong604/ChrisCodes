import React from "react";

import profilePic from "../../../resources/images/profilepic.jpg";
//import { useTrail, a } from "@react-spring/web";

import "./MainHeader.css";

/*
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
*/

const MainHeader = () => {
	return (
		<>
			<div>
				<header className="App-header color">
					<h1>Chris.</h1>
				</header>

				<div className="about_dropdown">
					<img src={profilePic} className="profile-pic" alt="chrisfong!"></img>

					{/*
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
            <p>Eager.</p>
            <h3>Resourceful.</h3>
            <h2>Diligent</h2>
            <h1>Curious</h1>
          </Trail>
		  */}
					<div className="intro-text">
						<h1 style={{ paddingBottom: "10vh" }}>A Brief Introduction</h1>
						<p>
							Hi! My name is Christopher Fong, and I am an aspiring developer
							born and raised in Richmond, BC, Canada.
						</p>
						<p>
							This website was first built during my second year in university,
							but is continuously developed as I learn new things.
						</p>
						<p>
							I'd like to consider this page as not just my creative resume, but
							also a place where you can get to know me further as I share my
							thoughts and experiences more in depth.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainHeader;
