import React, { Component } from 'react'
import Form from './Form'
import Messages from './Alerts/Messages'
import Typed from 'react-typed'

class Terminal extends Component {
	state = {
		strings: Messages.intro,
		isComplete: false,
	}

	render() {
		return (
			<div>
				<Typed
					strings={[this.state.strings]}
					typeSpeed={40}
					onComplete={(self) => {
						self.cursor.remove()
						this.setState({ isComplete: true })
					}}
				/>
				<p />
				<Form isComplete={this.state.isComplete} />
			</div>
		)
	}
}

export default Terminal
