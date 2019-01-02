import React from "react";
import { shallow } from "enzyme";

import Input from "..";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />).dive();
};

describe("Input Component", () => {
	describe("when the word has not been guessed", () => {
		it("renders the component without error", () => {});
		it("renders the input box", () => {});
		it("renders the submit button ", () => {});
	});
	describe("when the word has  been guessed", () => {
		it("renders the component without error", () => {});
		it("does not renders the input box", () => {});
		it("does notrenders the submit button ", () => {});
	});
});
