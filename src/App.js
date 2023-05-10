import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '123eifddl'
        },
        {
          name: 'Frank',
          id: '123343fddl'
        },
        {
          name: 'Jacky',
          id: '123eif25l'
        },
        {
          name: 'John',
          id: '123e1fd82'
        },
      ]
    };
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
