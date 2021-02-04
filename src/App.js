import React, { Component } from 'react';
import Note from './components/note/note';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      notes: [],
    };
  }

  inputValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addNote = () => {
    if (this.state.inputValue === '') {
      return;
    }
    let noteArr = this.state.notes;
    noteArr.push(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  deleteNote = (i) => {
    let noteArr = this.state.notes;
    noteArr.splice(i, 0);
    this.setState({ notes: noteArr });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let noteArr = this.state.notes;
      noteArr.push(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    let notes = this.state.notes.map((value, key) => {
      return (
        <Note
          key={key}
          text={value}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <div className="App">
        <div className="header">To-Do List</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>
          +
        </div>
        <input
          ref={(input) => {
            this.textInput = input;
          }}
          className="input"
          placeholder="Input text here"
          type="text"
          value={this.state.inputValue}
          onChange={(inputValue) => this.inputValueChange(inputValue)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
