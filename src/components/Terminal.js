import React, { Component } from 'react'
import InputOutput from './InputOutput'
import Messages from './Alerts/Messages'
import _ from 'lodash'

class Terminal extends Component {
	state = {
		conversation: [
			{
				form: '',
				isComplete: false,
				output: Messages.intro,
				userInput: '',
			},
		],
	}

	markComplete = () => {
		const interactionIndex = this.state.conversation.length - 1
		let newConversation = [...this.state.conversation]
		newConversation[interactionIndex].isComplete = true
		this.setState({
			conversation: newConversation,
		})
	}

	handleUserInput = (event) => {
		const interactionIndex = this.state.conversation.length - 1
		let newConversation = [...this.state.conversation]
		newConversation[interactionIndex].userInput = event.target.value
		this.setState({
			conversation: newConversation,
		})
	}

	handleUserSubmit = (event, userInput) => {
		event.preventDefault()
		const interactionIndex = this.state.conversation.length - 1
		let newConversation = [...this.state.conversation]
		newConversation[interactionIndex].form = 'disabled'
		this.setState({
			conversation: [
				newConversation,
				{
					form: '',
					isComplete: false,
					output: Messages.gamesList,
					userInput: '',
				},
			],
		})
	}

	// Logic for state change

	// onSubmit = (event, data) => {
	// 	event.preventDefault()
	// 	console.log({ event, data })
	// 	console.log('Do you See me?', this.state.conversation.length)
	// 	const lastConversation = _.last(this.state.conversation)
	// 	lastConversation.isDisabled = data.isDisabled
	// 	lastConversation.userInput = data.userInput
	// 	this.setState({
	// 		conversation: [
	// 			...this.state.conversation,
	// 			{
	// 				output: Messages.gamesList,
	// 				userInput: '',
	// 				isDisabled: '',
	// 			},
	// 		],
	// 	})
	// }

	render() {
		const lastConversation = _.last(this.state.conversation)
		return (
			<div>
				<InputOutput
					form={lastConversation.form}
					isComplete={lastConversation.isComplete}
					output={lastConversation.output}
					userInput={lastConversation.userInput}
					handleUserSubmit={this.handleUserSubmit}
					handleUserInput={this.handleUserInput}
					markComplete={this.markComplete}
				/>
			</div>
		)
	}
}

export default Terminal
