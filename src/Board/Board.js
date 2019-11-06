import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			borderColor1:false,
			borderColor2:false,
			borderColor3:false
		}
	}

	clickHandlerOne() {
		this.setState({borderColor1:true});

			this.setState({borderColor2:false});
			this.setState({borderColor3:false});

	}
	clickHandlerTwo() {
		this.setState({borderColor2:true});

			this.setState({borderColor1:false});
			this.setState({borderColor3:false});

	}
	clickHandlerThree() {
		this.setState({borderColor3:true});

			this.setState({borderColor1:false});
			this.setState({borderColor2:false});

	}
	render() {
	const boardOption1 = this.state.borderColor1 ? "Board-optionRed" : "Board-option";
	const boardOption2 = this.state.borderColor2 ? "Board-optionRed" : "Board-option";
	const boardOption3 = this.state.borderColor3 ? "Board-optionRed" : "Board-option";
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div className={boardOption1}  onClick={this.clickHandlerOne.bind(this)}>1</div>
					<div className={boardOption2}  onClick={this.clickHandlerTwo.bind(this)}>2</div>
					<div className={boardOption3}  onClick={this.clickHandlerThree.bind(this)}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;