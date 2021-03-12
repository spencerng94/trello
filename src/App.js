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
        </div>
    );
  }
}

export default App;