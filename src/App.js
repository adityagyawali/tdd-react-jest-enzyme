import React, { Component } from "react";
// import Calculator from "./component/Calculator";
import "./App.css";

import ClickCounter from "./component/ClickCounter";

class App extends Component {
	render() {
		return (
			<div className="App">
				<ClickCounter />
			</div>
		);
	}
}

export default App;
