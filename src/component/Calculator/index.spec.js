import React from "react";
import { shallow } from "enzyme";

import Calculator from ".";
import Display from "./Display";
import Keypad from "./Keypad";

describe("Calculator component", () => {
	let wrapper;
	wrapper = shallow(<Calculator />);

	it("should find a div element", () => {
		expect(wrapper.find("div")).toHaveLength(1);
	});

	it("should find Display component", () => {
		expect(
			wrapper.containsMatchingElement(
				<Display displayValue={wrapper.instance().state.displayValue} />
			)
		).toEqual(true);
	});

	it("should contain Keypad component", () => {
		expect(wrapper.containsMatchingElement(<Keypad />)).toEqual(true);
	});

	it("should render Display and Keypad component ", () => {
		expect(
			wrapper.containsAllMatchingElements([
				<Display displayValue={wrapper.instance().state.displayValue} />,
				<Keypad />
			])
		).toEqual(true);
	});
});
