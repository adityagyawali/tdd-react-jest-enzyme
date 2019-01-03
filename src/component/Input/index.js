import React, { Component } from "react";
import { connect } from "react-redux";

import { success } from "../../reducers";

export class Input extends Component {
	render() {
		console.log("success", this.props.success);
		let contents = this.props.success ? null : (
			<form className="col s12">
				<div className="row">
					<div className="input-field col s6">
						<input
							data-test="input-box"
							placeholder="which word are you guessing ?"
							name="word"
							type="text"
							// value={word}
							className="validate"
							// onChange={handleChange}
						/>
						<label>Guessed Word</label>
					</div>
					<button
						data-test="submit-button"
						className="btn waves-effect waves-light"
						type="submit"
						name="action">
						Submit
						<i className="material-icons right">send</i>
					</button>
				</div>
			</form>
		);
		return (
			<div data-test="component-input" className="row">
				{contents}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		success: success(state)
	};
};

export default connect(mapStateToProps)(Input);
