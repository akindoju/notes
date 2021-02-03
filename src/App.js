import React, { Component } from 'react';
import InputBox from './components/inputBox/inputBox';
import Note from './note/note';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      notes: [],
    };
  }

  // updateInput = (inputText) => {
  //   this.setState({ value: inputText.target.value });
  // };

  inputValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="header">To-Do List</div>
        <div className="btn" onClick={this.addNote}>
          +
        </div>
        <InputBox inputChange={this.inputValueChange} />
        {/* <input
          type="text"
          className="input"
          value={this.state.inputText}
          onChange={this.setState({ value: this.inputChange })}
          placeholder="Input text here"
        />  */}
      </div>
    );
  }
}

export default App;
