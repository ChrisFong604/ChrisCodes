import React, { Fragment } from "react";

import StaticHeader from "../App/StaticHeader/StaticHeader";

import AboutCSS from "./About.module.css";

const AboutPage = () => {
	return (
		<>
			<StaticHeader Header={"About"} />
			<div className={AboutCSS.about_container}>
				<p style={{ gridColumn: "2/3", opacity: "0.5" }}>August 14th, 2021</p>
				<div className={AboutCSS.leftcol}>
					<h3>General Introduction</h3>
					<p>
						Hi, nice, to meet you :). My name is Christopher, and I'm currently
						based in Vancouver, BC. I am currently a Computing Science student
						at Simon Fraser Univsersity, and an aspiring software engineer.
					</p>
					<h3>What do I love about tech?</h3>
					<p>
						I've discovered a genuine interest in the limitless applications of
						technology. The concept that software has applications to just about
						any and every domain of our lives is both incredible to think about,
						but also important to acknowledge in the scope of responsibilities
						that we bear as developers.
					</p>
					<p>
						As of recent, I've endeavoured to independently seek out and explore
						various facets of technology to stimulate my personal growth through
						learning and overcoming creative challenges. These include, but are
						not limited to:
						<li>self-learning technologies</li>
						<li>brainstorming solutions to problems both large and small</li>
						<li>
							Improving current skills and developing new ones while
							implementing
						</li>
					</p>
				</div>
				<div className={AboutCSS.rightcol}>
					<h3>Goal for this website</h3>
					<p>
						As of 2021/09/23 - Refactor website design and infrastructure,
						implement in Next.js or another multi-page framework
					</p>
					<h3>Some stuff about me</h3>
					<h4>How did I get into tech?</h4>
					<p>
						Growing up, some of my best memories were from the sci-fi adventures
						I had in Halo: Combat Evolved, or the fun I had with friends playing
						Wii sports and Mario Party.
					</p>
					<p>
						Inevitably, I became curious about the various machines that
						provided me with such fond memories and fun times. I fondly recall
						researching endlessly the various components of computers and what
						purpose they served, becoming fascinated with the incredible things
						that could be built, and the things these machines were capable of,
						far beyond video games.
					</p>
					<p>
						Thus, my curiosity led me to pursue a degree in CS, which is where I
						am at in the present.
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
