// @flow

import React from "react";
import Key from "../../../component/Key";
import "./index.css";

type Props = {
	callOperator: Function,
	setOperators: Function,
	updateDisplay: Function,
	numbers: Array,
	operators: Array
};
const Keypad = ({
	callOperator,
	setOperators,
	updateDisplay,
	numbers,
	operators
}: Props) => {
	const numberkeys = numbers.map((number, i) => (
		<Key
			key={number}
			keyValue={number}
			keyType="number-key"
			keyAction={updateDisplay}
		/>
	));

	const operatorkeys = operators.map((operator, i) => (
		<Key
			key={operator}
			keyValue={operator}
			keyType="oprator-key"
			keyAction={setOperators}
		/>
	));
	return (
		<div className="keypad-container">
			<div className="numbers-container">{numberkeys}</div>
			<div className="operators-container">{operatorkeys}</div>
			<div className="submit-container">
				<Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
			</div>
		</div>
	);
};

export default Keypad;
