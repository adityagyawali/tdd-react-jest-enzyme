import React from "react";
import Keypad from "./index";
import { shallow } from "enzyme";

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

	it("should have a div element", () => {
		expect(wrapper.find("div")).toHaveLength(1);
	});
});
