"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import css from "./styles/index.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import BarGraph from "./components/BarGraph/BarGraph.jsx";
import LineGraph from "./components/LineGraph/LineGraph.jsx";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<div className="container">
						<Switch>
							{["/", "/home"].map((route, index) => (
								<Route exact path={route} component={Home} key={index} />
							))}
							<Route exact path="/bar-graph" component={BarGraph} />
							<Route exact path="/line-graph" component={LineGraph} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".app"));
