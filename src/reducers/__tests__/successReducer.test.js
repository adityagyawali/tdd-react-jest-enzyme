import * as actionTypes from "../../actions/actionTypes";
import { successReducer } from "../successReducer";

describe("success reducer", () => {
	it("should render the inital state of `false` when no action is passed", () => {
		const newState = successReducer(undefined, {});
		expect(newState).toBe(false);
	});

	it("should update the state to `ture` when the action of type `CORRECT_GUESS` is passed", () => {
		const newState = successReducer(undefined, {
			type: actionTypes.CORRECT_GUESS
		}); //when passed undefined it uses the initial state as default state
		expect(newState).toBe(true);
	});
});
