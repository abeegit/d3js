"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as d3 from "d3";

import css from "./styles/index.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import BarGraph from "./components/BarGraph/BarGraph.jsx";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<div className="container-fluid">
						{["/", "/home"].map((route, index) => (
							<Route exact path={route} component={Home} key={index} />
						))}
						<Route exact path="/bar-graph" component={BarGraph} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".app"));
