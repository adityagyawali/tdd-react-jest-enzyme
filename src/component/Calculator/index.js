import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

import "./index.css";

class Calculator extends Component {
	state = {
		//value to be displayed in the screen
		displayValue: 0,

		numbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "ce"],
		operators: ["/", "x", "-", "+"],
		//operators seclectd form math orpeators
		selectedOperators: "",
		//stored value to use for math operatorn
		storedValue: ""
	};

	callOperator = () => {
		//when submit button is clicked
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
