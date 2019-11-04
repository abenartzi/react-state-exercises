import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nameContent: '',
			mealContent: '',
			value:'Frangelico'


		};
	}
	nameTypeHandler(event) {
		this.setState({nameContent:event.target.value})
	}

	optionHandler(event) {
		this.setState({value:event.target.value})
	}

	mealTypeHandler(event) {
		this.setState({mealContent:event.target.value})
	}


	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" onChange={this.nameTypeHandler.bind(this)}/>
				</div>
				<div>
					Choose restaurant:
					<select onChange={this.optionHandler.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" onChange={this.mealTypeHandler.bind(this)}/>
				</div>
				<div>
					Want a desert?
					<input type="checkbox" />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.nameContent}! <br />
					We are glad you want to reserve a table at {this.state.value}.<br />
					We will make sure that your favorite meal, {this.state.mealContent} is available.<br />
					Additionally, our chef will make a special desert for you!<br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;