import React, { Component } from 'react'
import Typed from 'react-typed'

class Falcon extends Component {
	render() {
		return (
			<div>
				<Typed
					strings={[this.props.output]}
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
