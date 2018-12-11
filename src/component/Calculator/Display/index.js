// @flow
import React from "react";
import "./index.css";

type Props = {
	displayValue: Number
};

const Display = ({ displayValue }: Props) => {
	return (
		<div className="display-contaienr">
			<p className="display-value">{displayValue}</p>
		</div>
	);
};

export default Display;
