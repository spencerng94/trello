import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './navigation/navigationBar.jsx';
import BoardHeader from './components/boardHeader.jsx';
import Lists from './components/Lists.jsx';
import { getLists } from './redux/actions/getActions.js';
import { deleteList } from './redux/actions/changeActions.js';
import store from './redux/store/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      cards: []
    };
    this.onGetLists = this.onGetLists.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  onGetLists() {
    this.props.getLists();
    store.subscribe(() => {
      const state = store.getState();
      console.log(state, 'line 22')
      console.log(state.getReducers.lists, 'line 23')
      this.setState({
        lists: state.getReducers.lists
      })
    });
  }

  handleDeleteList(listId) {
    console.log(listId, 'line 36');
    this.props.deleteList(listId);
  }

  componentDidMount() {
    this.onGetLists()
  }

  render() {
    const {lists} = this.state;
    console.log(lists, 'line 40')
    
    return (
        <div className="App">
            <NavBar/>
            <BoardHeader/>
            <Lists lists={lists} handleDeleteList={this.handleDeleteList}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards
});



export default connect(mapStateToProps, { getLists, deleteList })(App);