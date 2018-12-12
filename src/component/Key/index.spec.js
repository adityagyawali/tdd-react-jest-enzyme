import React from "react";
import { shallow } from "enzyme";

import Key from ".";

describe("Key COmponent", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Key keyAction={jest.fn()} keyValue={""} keyType={""} />);
	});

	it("should render a div", () => {
		expect(wrapper.find("div")).toHaveLength(1);
	});

	it("should render the value of keyvalue", () => {
		wrapper.setProps({ keyValue: "test" });
		expect(wrapper.text()).toEqual("test");
	});

	it("renders correclty", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
