import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  updateInput = (inputText) => {
    this.setState({ inputText: inputText.target.value });
  };

  render() {
    // let { inputText } = this.state;
    return (
      <div className="App">
        <div className="header">To-Do List</div>
        <div className="btn">+</div>
        <input
          type="text"
          // ref={(input) => (inputText = input)}
          className="input"
          value={this.state.inputText}
          onChange={(inputText) => this.updateInput(inputText)}
          placeholder="Input text here"
        />
      </div>
    );
  }
}

export default App;
