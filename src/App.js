import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="header">To-Do List</header>
      </div>
    );
  }
}

export default App;
