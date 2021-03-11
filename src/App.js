import logo from './logo.svg';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './navigation/navigationBar.jsx';
import BoardHeader from './components/boardHeader.jsx';
import Lists from './components/Lists.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
        <div className="App">
            <NavBar></NavBar>
            <BoardHeader></BoardHeader>
            <Lists></Lists>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Trello Clone
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;