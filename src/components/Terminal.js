import React, { Component } from 'react'
import InputOutput from './InputOutput'
import Messages from './Alerts/Messages'

class Terminal extends Component {
	state = {
		conversation: [
			{
				output: Messages.intro,
				userInput: '',
				isDisabled: '',
			},
		],
	}

	// onSubmit = (event) => {
	// 	event.preventDefault()
	// 	console.log('OnSubmit located in "Terminal" component')
	// 	// this.setState={
	// 	// 	this.state.conversation.map(dialog => dialog.id === id ? {...dialog, userInput} : dialog)
	// 	// }
	// }

	render() {
		return (
			<div>
				<InputOutput
					output={this.state.conversation[0].output}
					// onSubmit={this.onSubmit}
				/>
			</div>
		)
	}
}

export default Terminal
