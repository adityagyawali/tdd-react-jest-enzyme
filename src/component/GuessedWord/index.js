import React from "react";
import PropTypes from "prop-types";

const GuessedWord = props => {
	let contents;
	if (props.guessedWords.length === 0) {
		contents = (
			<span data-test="guess-instructions" style={{ fontSize: 30 }}>
				Try to guess the secret word !!!
			</span>
		);
	} else {
		const guessedWordsRows = props.guessedWords.map((word, i) => {
			return (
				<tr data-test="guessed-word" key={i}>
					<td>{word.guessedWord}</td>
					<td>{word.letterMatchCount}</td>
				</tr>
			);
		});
		contents = (
			<div data-test="guessed-words">
				<h3 style={{ textAlign: "center" }}>Guessed Word</h3>

				<table>
					<thead>
						<tr>
							<th>Guessed Word</th>
							<th>Correct Letters</th>
						</tr>
					</thead>

					<tbody>{guessedWordsRows}</tbody>
				</table>
			</div>
		);
	}
	return <div data-test="component-guessed-words">{contents}</div>;
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
