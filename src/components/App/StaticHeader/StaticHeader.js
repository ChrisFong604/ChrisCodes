import React from "react";

import StaticHeaderCSS from "./StaticHeader.module.css";

const StaticHeader = ({ Header }) => {
	return (
		<header className={StaticHeaderCSS.header}>
			<h1>{Header}</h1>
		</header>
	);
};

export default StaticHeader;
