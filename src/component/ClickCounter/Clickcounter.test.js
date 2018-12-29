import * as React from "react";
import { shallow } from "enzyme";
import ClickCounter from ".";

describe("ClickCOunter COmponent", () => {
	let shallowWrapper;
	beforeEach(() => {
		shallowWrapper = shallow(<ClickCounter />);
	});

	const findElementByAttribute = (wrapper, value) => {
		return wrapper.find(`[data-test='${value}']`);
	};

	it("should find a div with test attribute", () => {
		const div = findElementByAttribute(shallowWrapper, "component-app");
		expect(div.length).toBe(1);
	});
	it("should find a div with test attribute", () => {
		const button = findElementByAttribute(shallowWrapper, "button");
		expect(button.length).toBe(1);
	});
	it("should find a h1 with test attribute", () => {
		const h1 = findElementByAttribute(shallowWrapper, "h1");
		expect(h1.length).toBe(1);
	});

	it("should give the inital state value", () => {
		const initalState = shallowWrapper.state("count");
		expect(initalState).toBe(0);
	});

	it("after clicking button increases the display", () => {
		const h1 = findElementByAttribute(shallowWrapper, "h1");
		// expect(h1.text()).toEqual("0");
		const button = findElementByAttribute(shallowWrapper, "button");
		button.simulate("click");

		shallowWrapper.update();

		expect(h1.text()).toEqual("1");
	});
});
