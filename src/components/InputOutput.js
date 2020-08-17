import React, { Component } from 'react'
import Form from './Form'
import Falcon from './Falcon'

class InputOutput extends Component {
	render() {
		return (
			<div>
				<Falcon
					output={this.props.output}
					markComplete={this.props.markComplete}
					isComplete={this.props.isComplete}
				/>
				<p />
				<Form
					form={this.props.form}
					handleUserSubmit={this.props.handleUserSubmit}
					isComplete={this.props.isComplete}
					handleUserInput={this.props.handleUserInput}
					userInput={this.props.userInput}
				/>
				<p />
			</div>
		)
	}
}

export default InputOutput
