const findUniqueChar = string => {
	let unique = "";
	for (let i = 0; i < string.length; i++) {
		if (unique.indexOf(string[i]) === -1) {
			unique += string[i];
		}
	}
	return unique;
};

export const getLetterMatchCount = (string, secretWord) => {
	const guessedWord = findUniqueChar(string);
	let count = 0;
	for (let i = 0; i < guessedWord.length; i++) {
		for (let j = 0; j < secretWord.length; j++) {
			if (guessedWord.charAt(i) === secretWord.charAt(j)) {
				count++;
			}
		}
	}
	return count;
};
