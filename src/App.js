import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        <header>
          <ul>
            <li>
              <a href="#">Menu 1</a>
            </li>
            <li>
              <a href="#">Menu 2</a>
            </li>
            <li>
              <a href="#">Menu 3</a>
            </li>
            <li>
              <a href="#">Menu 4</a>
            </li>
          </ul>
        </header>
        <div className="container">
          <div className="left">Left Side</div>
          <div className="right">Right Side</div>
        </div>
        <footer>This is a footer</footer>
      </div>
    );
  }
}

export default App;
