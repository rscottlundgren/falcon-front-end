import React from 'react'

class Form extends React.Component {
	state = {
		input: '',
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state.input)
	}

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				style={{
					display: this.props.isComplete === false ? 'none' : '',
				}}
			>
				{'> '}
				<input
					ref={(input) => input && input.focus()}
					type='text'
					style={{
						border: 'none',
						outline: 'none',
					}}
					value={this.state.input}
					onChange={(event) => this.setState({ input: event.target.value })}
				/>
			</form>
		)
	}
}

export default Form
