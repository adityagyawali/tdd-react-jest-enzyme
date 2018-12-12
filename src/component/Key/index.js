import React from "react";
import "./index.css";
const Key = ({ keyAction, keyType, keyValue }) => {
	return (
		<div
			className={`key-container ${keyValue}`}
			onClick={() => keyAction(keyValue)}
		>
			<p className="key-value">{keyValue}</p>
		</div>
	);
};

export default Key;
