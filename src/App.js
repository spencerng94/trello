import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './navigation/navigationBar.jsx';
import BoardHeader from './components/boardHeader.jsx';
import Lists from './components/Lists.jsx';
import { getLists } from './redux/actions/getActions.js';
import { deleteList, addList, editList} from './redux/actions/changeActions.js';
import store from './redux/store/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      cards: []
    };
    this.onGetLists = this.onGetLists.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleEditList = this.handleEditList.bind(this);
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

  handleAddList(newListId) {
    console.log(newListId, 'line 37');
    this.props.addList(newListId);
  }

  handleDeleteList(listId) {
    this.props.deleteList(listId);
  }

  handleEditList(listId, newName) {
    console.log(listId, newName, 'line 47777')
    this.props.editList(listId, newName);
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
            <Lists lists={lists} handleDeleteList={this.handleDeleteList} handleAddList={this.handleAddList} handleEditList={this.handleEditList}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards
});



export default connect(mapStateToProps, { getLists, deleteList, addList, editList })(App);