import React, { Component } from 'react'
import Typed from 'react-typed'

class Falcon extends Component {
	state = {
		output: this.props.output,
	}

	render() {
		return (
			<div>
				<Typed
					strings={[this.state.output]}
					typeSpeed={40}
					onComplete={(self) => {
						self.cursor.remove()
						this.props.markComplete()
					}}
				/>
			</div>
		)
	}
}

export default Falcon
