import React from 'react';
import Typed from 'react-typed'
import './App.css';

class Form extends React.Component {
  state = {
    input: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.input)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{
        display: this.props.isComplete === false ? 'none' : ''
      }}>
        > <input
          ref={input => input && input.focus()}
          type="text"
          value={this.state.input}
          onChange={event => this.setState({ input: event.target.value })}
        />
      </form>
    )
  }
}

class App extends React.Component {
  state = {
    isComplete: false
  }

  render() {
    return (
      <div className="">
        <Typed
          strings={[
            'Shall we play a game?']}
          typeSpeed={40}
          onComplete={self => {
            self.cursor.remove()
            this.setState({ isComplete: true })
          }}
        />
        <p />
        <Form isComplete={this.state.isComplete}/>
      </div>
    )
  }
}

export default App;
