import React, { Component } from 'react'
import Form from './Form'
import Falcon from './Falcon'
import Messages from './Alerts/Messages'

class Terminal extends Component {
	state = {
		output: Messages.intro,
		userInput: '',
		isComplete: false,
		isDisabled: '',
	}

	markComplete = () => {
		this.setState({
			isComplete: true,
		})
	}

	onSubmit = (event, userInput) => {
		event.preventDefault()
		this.setState({
			userInput: userInput,
			isDisabled: 'disabled',
		})
	}

	render() {
		return (
			<div>
				<Falcon
					output={this.state.output}
					markComplete={this.markComplete}
					isComplete={this.state.isComplete}
				/>
				<p />
				<Form
					input={this.state.userInput}
					onSubmit={this.onSubmit}
					isComplete={this.state.isComplete}
					isDisabled={this.state.isDisabled}
				/>
				<p />
			</div>
		)
	}
}

export default Terminal
