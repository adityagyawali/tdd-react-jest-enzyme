import React from "react";
import PropTypes from "prop-types";
const GuessedWord = props => {
	let contents;
	if (props.guessedWords.length === 0) {
		contents = (
			<span data-test="guess-instructions">
				Try to guess the secret word !!!
			</span>
		);
	}
	return <div data-test="component-guess-words">{contents}</div>;
};

GuessedWord.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired
		})
	)
};
export default GuessedWord;
