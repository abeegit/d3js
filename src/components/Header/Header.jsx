"use strict";

import React from "react";

export default class Header extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		document.querySelector("form").addEventListener("submit", event => {
			event.preventDefault();
		});
		$('.search-btn[data-toggle="popover"]').popover();
	}

	componentWillUnmount() {
		$('.search-btn[data-toggle="popover"]').popover("dispose");
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					D3
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto" />
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0 search-btn"
							type="submit"
							data-container="body"
							data-toggle="popover"
							data-placement="bottom"
							data-content="This feature is not available."
						>
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}
