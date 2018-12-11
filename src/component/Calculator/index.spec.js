import React from "react";
import { shallow } from "enzyme";

import Calculator from ".";
import Display from "./Display";
import Keypad from "./Keypad";

describe("render a div element in calculator component", () => {
	let wrapper;
	wrapper = shallow(<Calculator />);

	it("should find a div element", () => {
		expect(wrapper.find("div")).toHaveLength(1);
	});

	it("should find Display component", () => {
		expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
	});

	it("should contain Keypad component", () => {
		expect(wrapper.containsMatchingElement(<Keypad />)).toEqual(true);
	});
});
