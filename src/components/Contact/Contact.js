import React from "react";
import ContactCSS from "./ContactPage.module.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function ContactRenderer() {
	return (
		<div className={ContactCSS.container}>
			<div className={ContactCSS.leftcol}>
				<p>
					Feel free to follow/connect with me on any of my social platforms, or
					just reach out to my email @chris_fong@sfu.ca
				</p>
			</div>
			<div className={ContactCSS.rightcol}>
				<ul>
					<li>
						<a href="https://github.com/chrisfong604" target="_blank">
							<GitHubIcon />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/chrisfong604/">
							<LinkedInIcon />
						</a>
					</li>
					<li>
						<a href="https://instagram.com/isrly_chris">
							<InstagramIcon />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
