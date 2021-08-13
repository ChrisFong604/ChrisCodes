import React from "react";

import StaticHeaderCSS from "./StaticHeader.module.css";

const StaticHeader = ({ Header }) => {
	return (
		<header
			className={StaticHeaderCSS.header}
			data-aos="fade-in"
			data-aos-duration="1200"
		>
			<h1>{Header}</h1>
		</header>
	);
};

export default StaticHeader;
