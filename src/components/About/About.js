import React, { Fragment } from "react";
import AboutCSS from "./About.module.css";

const AboutPage = () => {
	return (
		<>
			<div className={AboutCSS.about_container}>
				<p style={{ gridColumn: "2/3", opacity: "0.5" }}>August 14th, 2021</p>
				<div className={AboutCSS.leftcol}>
					<h3>General Introduction</h3>
					<p>
						Hi, nice, to meet you :). My name is Christopher and I am currently
						a Computing Science student at Simon Fraser Univsersity. But outside
						of school, I've genuinely found a love for technology and the
						seemingly endless opportunities there are involved.
					</p>
					<p>
						As of recent, I've endeavoured to independently seek out and explore
						various facets of technology to stimulate my personal growth through
						learning and overcoming creative challenges. These include
						self-learning various technologies, brainstorming different
						solutions to existing problems, and using both skills I have and
						skills that I am developing.
					</p>
					<p>
						This website will contain not only a record of what I've
						accomplished, but also my plans and goals for the future. Stay tuned
						as this page will continuously evolve over time.
					</p>
				</div>
				<div className={AboutCSS.rightcol}>
					<h3>PC-Building:</h3>
					<p>
						What first inspired me to learn about technology was none other than
						my experiences with it. Some of my best memories are from the awe I
						felt playing Halo, or the fun competitions in Mario Kart amongst
						friends of mine. These experiences led me to begin tinkering with
						computers. Thus, PC-Building became one of my favourite hobbies.
					</p>
					<h3>Sports:</h3>
					<p>
						I enjoy a variety of sports, with my favourites being basketball and
						snowboarding.
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
