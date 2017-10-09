"use strict";

import React from "react";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { axisLeft } from "d3-axis";
import data from "../../data/data.json";

export default class BarGraph extends React.Component {
	componentDidMount() {
		let rectWidth = 50;
		let height = 300;
		let svg = select("svg#bar");
		let enter = svg
			.selectAll("rect")
			.data(data.bar)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * rectWidth)
			.attr("y", d => height - d)
			.attr("width", rectWidth)
			.attr("height", d => d)
			.attr("stroke", "#fff");
	}

	render() {
		return (
			<div className="container-fluid">
				<svg id="bar" />
			</div>
		);
	}
}
