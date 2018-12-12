import React from "react";
import { shallow, mount } from "enzyme";

import Calculator from ".";
import Display from "./Display";
import Keypad from "./Keypad";
import { wrap } from "module";

describe("Calculator component", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Calculator />);
	});

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

describe("mounted Calculator", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Calculator />);
	});

	it("calls update dispaly when a button is clicked", () => {
		const spy = jest.spyOn(wrapper.instance(), "updateDisplay"); //wrapper.instance == gets the component , 'updateDisplay' => is the function
		wrapper.instance().forceUpdate(); //make the force update
		expect(spy).toHaveBeenCalledTimes(0); //in the beginning the function is called 0
		wrapper
			.find(".number-key")
			.first()
			.simulate("click"); //finds the div with number-key class cheks first() and simulate the click
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it("calls setOperator when a operator key is clicked", () => {
		const spy = jest.spyOn(wrapper.instance(), "setOperators");
		wrapper.instance().forceUpdate();
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper
			.find(".operator-key")
			.first()
			.simulate("click");
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it("calls callOperator when submit key is clicked", () => {
		const spy = jest.spyOn(wrapper.instance(), "callOperator");
		wrapper.instance().forceUpdate();
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.find(".submit-key").simulate("click");
		expect(spy).toHaveBeenCalledTimes(1);
	});
});
