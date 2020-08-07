import React from 'react'

class Form extends React.Component {
	state = {
		input: this.props.input,
	}

	render() {
		return (
			<form
				style={{
					display: this.props.isComplete === false ? 'none' : '',
				}}
				onSubmit={(event) => {
					this.props.onSubmit(event, this.state.input)
				}}
			>
				{'> '}
				<input
					ref={(input) => input && input.focus()}
					type='text'
					disabled={this.props.isDisabled}
					style={{
						border: 'none',
						outline: 'none',
						backgroundColor: '#FFF',
						color: '#000',
					}}
					value={this.state.input}
					onChange={(event) => this.setState({ input: event.target.value })}
				/>
			</form>
		)
	}
}

export default Form
