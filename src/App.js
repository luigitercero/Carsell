import React, { Component } from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Car from './views/Car'
import Add from './views/AddCar'
class App extends Component {
  render() {
    return (
      <div className="App">

        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        
        <div className="container"><Car /></div>
        
        <div className="container"><Add /></div>
      </div>
    );
  }
}

export default App;
