import React from "react";
import { shallow } from "enzyme";

import { Input } from "..";

import { findByTestAttr } from "../../../test/testUtils";

const defaultProps = { success: false };
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Input {...setupProps} />);
};

describe("Input Component", () => {
	describe("when the word has not been guessed", () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: false };
			wrapper = setup(initialState);
		});
		it("renders the component without error", () => {
			const component = findByTestAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});
		it("renders the input box", () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.length).toBe(1);
		});
		it("renders the submit button ", () => {
			const submitButton = findByTestAttr(wrapper, "submit-button");
			expect(submitButton.length).toBe(1);
		});
	});
	describe("when the word has  been guessed", () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: true };
			wrapper = setup(initialState);
		});
		it("renders the component without error", () => {
			const component = findByTestAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});
		it("does not renders the input box", () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.length).toBe(0);
		});
		it("does notrenders the submit button ", () => {
			const submit = findByTestAttr(wrapper, "submit-button");
			expect(submit.length).toBe(0);
		});
	});
});
