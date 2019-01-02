import * as actionTypes from "../actions/actionTypes";
const initalState = false;

export const successReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.CORRECT_GUESS:
			return true;

		default:
			return state;
	}
};
