import React from "react";

import Display from ".";

import { shallow } from "enzyme";

describe("Display", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Display />);
	});

	it("should have a div element", () => {
		expect(wrapper.find("div")).toHaveLength(1);
	});
});
