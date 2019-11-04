import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

// let time = new Date().toLocaleTimeString('en-US',{hour12:false});

class Clock extends Component {
	constructor(props){
		super(props);
		this.state ={
			date:new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}


	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	render() {
		return (
			<div>
				<h1>Clock</h1>
				The time is:{this.state.date.toLocaleTimeString('en-US',{hour12:false})}
			</div>
		);
	}

	tick() {
		this.setState({date:new Date()})
	}
}

export default Clock;