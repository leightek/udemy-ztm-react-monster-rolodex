import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Leigh',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button onClick={() => {
            this.state.name = 'John'
            console.log(this.state.name);
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
