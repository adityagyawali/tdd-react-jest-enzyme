import { combineReducers } from "redux";
import { successReducer } from "./successReducer";

export const rootReducer = combineReducers({
	success: successReducer
});

export const success = state => state.success;
