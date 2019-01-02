import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../test/testUtils";
import GuessedWord from "..";

const defaultProps = {
	guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWord {...setupProps} />);
};

it("should not throw warning with expected props", () => {
	checkProps(GuessedWord, defaultProps);
});

describe("if there are no words guessed", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});
	it("should render without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-words");
		expect(component.length).toBe(1);
	});

	it("should read the instructions to guess the words", () => {
		const instructions = findByTestAttr(wrapper, "guess-instructions");
		expect(instructions.text().length).not.toBe(0);
	});
});

describe("if there are guessed words", () => {
	let wrapper;
	const guessedWords = [
		{ guessedWord: "train", letterMatchCount: 3 },
		{ guessedWord: "agile", letterMatchCount: 2 },
		{ guessedWord: "party", letterMatchCount: 1 }
	];

	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});

	it("should render without errors", () => {
		const component = findByTestAttr(wrapper, "component-guessed-words");
		expect(component.length).toBe(1);
	});

	it("should render `guessed words` section", () => {
		const guessedWordsDiv = findByTestAttr(wrapper, "guessed-words");
		expect(guessedWordsDiv.length).toBe(1);
	});

	it("should render correct number of guessed words", () => {
		const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
		expect(guessedWordsNodes.length).toBe(guessedWords.length);
	});
});
