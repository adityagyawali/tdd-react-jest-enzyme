import React, { Component } from "react";

class Click extends Component {
	state = {
		count: 0
	};

	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		});
	};
	render() {
		return (
			<React.Fragment>
				<div data-test="component-app">
					<h1 data-test="h1">{this.state.count}</h1>
					<button data-test="button" onClick={this.handleClick}>
						Increase by 1
					</button>
				</div>
			</React.Fragment>
		);
	}
}
export default Click;
