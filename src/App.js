import * as React from "react";
import "./App.css";
import Congrats from "./component/Congrats";
import GuessedWords from "./component/GuessedWord";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Congrats success={false} />
				<GuessedWords
					guessedWords={[
						{ guessedWord: "hello", letterMatchCount: "3" },
						{ guessedWord: "hello", letterMatchCount: "3" },
						{ guessedWord: "hello", letterMatchCount: "3" }
					]}
				/>
			</div>
		);
	}
}

export default App;
