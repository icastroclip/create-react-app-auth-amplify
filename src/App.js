import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form action="https://clip.mx/">
            <span className="formtext">Numero de INE: </span>
            <br/>
            <input
                type="text"
                placeholder="INE"
                required
            />
            <input type="submit" value="Registrar!"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
//export default withAuthenticator(App, true);
