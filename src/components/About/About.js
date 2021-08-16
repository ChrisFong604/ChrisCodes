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
						Outside of school, I've discovered a genuine interest in the endless
						possibilities of tech. The concept that software has applications to
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
					<h3>The future, for now</h3>
					<p>
						This website will contain not only a record of what I've
						accomplished, but also my plans and goals for the future. It will
						continue evolving as long as I continue to gain more things to add!
					</p>
				</div>
				<div className={AboutCSS.rightcol}>
					<h3>Hobbies and Interests</h3>
					<p>
						What first inspired me to learn about technology was none other than
						my experiences with it. Some of my best memories are from the awe I
						felt playing Halo, or the fun competitions in Mario Kart amongst my
						friends. These experiences led me to begin tinkering with computers,
						and putting together machines.
					</p>
					<p>
						I enjoy a variety of sports, but my all-time favourites are
						snowboarding and basketball. My favourite players include Derrick
						Rose, Devin Booker, and Stephen Curry; players who are not only
						incredibly talented, but also whose personalities and work ethic
						inspire me.
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
