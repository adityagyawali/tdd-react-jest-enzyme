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
		const { displayValue, numbers, operators } = this.state;
		return (
			<div className="calculator-container">
				<Display displayValue={displayValue} />
				<Keypad
					callOperator={this.callOperator}
					setOperators={this.setOperators}
					updateDisplay={this.updateDisplay}
					numbers={numbers}
					operators={operators}
				/>
			</div>
		);
	}
}
export default Calculator;
