import React from "react";
import { shallow } from "enzyme";

import Congrats from "..";
import { findByTestAttr } from "../../../test/testUtils.js";

const setup = (props = {}) => {
	return shallow(<Congrats {...props} />);
};

test("should render without error", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.length).toBe(1);
});

it("should render no text when the `success props` is false ", () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.text()).toBe("");
});

it("should render congrats message when the `success props` is true ", () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "congrats-message");
	expect(message.text().length).not.toBe(1); //not.toBe(1) refers to non zero value
});
