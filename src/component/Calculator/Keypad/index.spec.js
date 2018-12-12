import React from "react";
import Keypad from "./index";
import { shallow, mount } from "enzyme";
import { wrap } from "module";

describe("Keypad component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<Keypad
				callOperator={jest.fn()}
				setOperators={jest.fn()}
				updateDisplay={jest.fn()}
				numbers={[]}
				operators={[]}
			/>
		);
	});

	it("should have 4 div element", () => {
		expect(wrapper.find("div")).toHaveLength(4);
	});

	// it("renders the values of numbers", () => {
	// 	wrapper.setProps({ numbers: ["0", "1", "2"] });
	// 	expect(wrapper.find(".numbers-container").text()).toEqual("012");
	// });

	// it("render the values of operators keys", () => {
	// 	wrapper.setProps({ operators: ["+", "-", "*", "/"] });
	// 	expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
	// });

	it("should render instance Key component for each index of number, operator and submit kye", () => {
		const numbers = ["0", "1"];
		const operators = ["+", "-"];
		const submit = 1;
		const keyTotal = numbers.length + operators.length + submit;
		wrapper.setProps({ numbers, operators });

		expect(wrapper.find("Key").length).toEqual(keyTotal);
	});
});

describe("mounted keypad", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(
			<Keypad
				callOperator={jest.fn()}
				setOperators={jest.fn()}
				updateDisplay={jest.fn()}
				numbers={[]}
				operators={[]}
			/>
		);
	});

	it("should render the value of numbers to DOM", () => {
		wrapper.setProps({ numbers: ["0", "1", "2"] });
		expect(wrapper.find(".numbers-container").text()).toEqual("012");
	});

	it("should render the operators to DOM", () => {
		wrapper.setProps({ operators: ["+", "-", "*", "/"] });
		expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
	});
});
