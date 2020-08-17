import React from 'react'

class Form extends React.Component {
	render() {
		return (
			<form
				style={{
					display: this.props.isComplete === false ? 'none' : '',
				}}
				onSubmit={this.props.handleUserSubmit}
			>
				{'> '}
				<input
					ref={(input) => input && input.focus()}
					type='text'
					name='userInput'
					disabled={this.props.form}
					style={{
						border: 'none',
						outline: 'none',
						backgroundColor: '#FFF',
						color: '#000',
					}}
					value={this.props.userInput}
					onChange={this.props.handleUserInput}
				/>
			</form>
		)
	}
}

export default Form
