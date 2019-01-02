import { correctGuess } from "..";
import * as actionTypes from "../actionTypes";

describe("correctGuess action", () => {
	it("should return an object with type: `CORRECT_GUESS", () => {
		const action = correctGuess();
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
	});
});
