"use strict";

import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<Link to="/bar-graph">Bar</Link>
				</div>
				<div className="row">
					<Link to="/line-graph">Line</Link>
				</div>
			</div>
		);
	}
}
