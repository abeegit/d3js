"use strict";

import React from "react";
import { extent } from "d3-array";
import { select } from "d3-selection";
import { timeFormat } from "d3-time-format";
import { line } from "d3-shape";
import { scaleLinear, scaleTime } from "d3-scale";
import { axisLeft, axisBottom, axisRight } from "d3-axis";
import data from "../../data/data.json";

export default class LineGraph extends React.Component {
	componentDidMount() {
		let xRange = { min: 0, max: 700 };
		let yRange = { min: 0, max: 400 };

		let margin: {
			top: 10,
			right: 40,
			bottom: 0,
			left: 40
		};

		let bottomDomain = extent(data.line, d => new Date(d.date));
		let leftDomain = extent(data.line, d => d.bangalore);
		let rightDomain = extent(data.line, d => d.mangalore);

		let bottomScale = scaleTime()
			.domain(bottomDomain)
			.range([xRange.min, xRange.max]);

		let leftScale = scaleLinear()
			.domain(leftDomain)
			.range([yRange.max, yRange.min]);

		let rightScale = scaleLinear()
			.domain(rightDomain)
			.range([yRange.max, yRange.min]);

		let bottomAxis = axisBottom(bottomScale)
			.tickFormat(timeFormat("%a, %d"))
			.ticks(5);
		let leftAxis = axisLeft(leftScale).ticks(5);
		let rightAxis = axisRight(rightScale).ticks(10);

		let svg = select("svg#line")
			.attr("width", "960")
			.attr("height", "500");
		svg
			.append("g")
			.attr("transform", "translate(40, 20)")
			.call(leftAxis);
		svg
			.append("g")
			.attr("transform", "translate(40, 420)")
			.call(bottomAxis);
		svg
			.append("g")
			.attr("transform", "translate(740, 20)")
			.call(rightAxis);

		let bangaloreLine = line()
			.x(d => bottomScale(new Date(d.date)))
			.y(d => leftScale(d.bangalore));

		let mangaloreLine = line()
			.x(d => bottomScale(new Date(d.date)))
			.y(d => rightScale(d.mangalore));

		svg
			.append("path")
			.attr("d", bangaloreLine(data.line))
			.attr("transform", "translate(40, 20)")
			.attr("fill", "none")
			.attr("stroke", "#000");

		svg
			.append("path")
			.attr("d", mangaloreLine(data.line))
			.attr("transform", "translate(40, 20)")
			.attr("fill", "none")
			.attr("stroke", "blue");
	}

	render() {
		return (
			<div className="container-fluid">
				<svg id="line" />
			</div>
		);
	}
}
