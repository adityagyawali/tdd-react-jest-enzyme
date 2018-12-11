import React from "react";
import Keypad from ".";
import { shallow } from "enzyme";

describe("Keypad component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Keypad />);
	});

	it("should have a div element", () => {
		expect(wrapper.find("div")).toHaveLength(1);
	});
});
