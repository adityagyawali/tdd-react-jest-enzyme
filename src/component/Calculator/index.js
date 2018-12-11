import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

import "./index.css";

class Calculator extends Component {
	state = {
		displayValue: 0,
		numbers: [],
		operators: [],
		selectedOperators: "",
		storedValue: ""
	};

	callOperator = () => {
		console.log("call operation");
	};

	setOperators = () => {
		console.log("set operations");
	};

	updateDisplay = () => {
		console.log("update display");
	};
	render() {
		return (
			<div className="calculator-container">
				<Display />
				<Keypad />
			</div>
		);
	}
}
export default Calculator;
