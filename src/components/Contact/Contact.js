import React from "react";
import ContactCSS from "./ContactPage.module.css";

import StaticHeader from "../App/StaticHeader/StaticHeader";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function ContactPage() {
	return (
		<>
			<StaticHeader Header={"Contact"} />
			<div className={ContactCSS.container}>
				<div className={ContactCSS.leftcol}>
					<p>Connect with me:</p>
				</div>
				<div className={ContactCSS.rightcol}>
					<ul>
						<li>
							<a
								href="https://github.com/chrisfong604"
								target="_blank"
								rel="noreferrer"
							>
								<GitHubIcon />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/chrisfong604/"
								target="_blank"
								rel="noreferrer"
							>
								<LinkedInIcon />
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com/isrly_chris"
								target="_blank"
								rel="noreferrer"
							>
								<InstagramIcon />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
