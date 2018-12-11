import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Calculator from "./component/Calculator";

describe("App component", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("should render a div", () => {
		expect(wrapper.find("div").length).toEqual(1);
	});

	it("should render a calculator component", () => {
		expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
