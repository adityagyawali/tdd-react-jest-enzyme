import React from "react";

import Display from ".";

import { shallow } from "enzyme";

describe("Display", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Display displayValue={""} />);
	});

	it("should have a div element", () => {
		expect(wrapper.find("div")).toHaveLength(1);
	});

	it("should render the value of display value", () => {
		wrapper.setProps({ displayValue: "test" });
		expect(wrapper.text()).toEqual("test");
	});
});
