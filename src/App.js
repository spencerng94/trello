import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './navigation/navigationBar.jsx';
import BoardHeader from './components/boardHeader.jsx';
import Lists from './components/Lists.jsx';
import { getLists, getCards } from './redux/actions/getActions.js';
import { deleteList, addList, editList, addCard, deleteCard, editCard } from './redux/actions/changeActions.js';
import store from './redux/store/index.js';
import unsubscribe from './redux/store/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      cards: []
    };
    this.onGetCards = this.onGetCards.bind(this);
    this.onGetLists = this.onGetLists.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleEditList = this.handleEditList.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleEditCard = this.handleEditCard.bind(this);
  }

  onGetCards() {
    store.dispatch(this.props.getCards);
  }

  onGetLists() {
    store.dispatch(this.props.getLists);
  }

  handleAddList(newListId) {
    this.props.addList(newListId);
  }

  handleDeleteList(listId) {
    this.props.deleteList(listId);
  }

  handleEditList(listId, newName) {
    console.log(listId, newName, 'line 47777')
    this.props.editList(listId, newName);
  }

  handleAddCard(listId, lastCardId, lastPosition, newCardName) {
    this.props.addCard(listId, lastCardId, lastPosition, newCardName);
  }

  handleDeleteCard(cardId, listId) {
    this.props.deleteCard(cardId, listId);
  }

  handleEditCard(cardId, listId, newCardTitle) {
    console.log('made it here line 61');
  }

  componentDidMount() {
    this.onGetLists();
    this.onGetCards();
  }

  render() {
    const {lists, listIds, cards} = this.state;
    console.log(cards, 'line 40')
    
    return (
        <div className="App">
            <NavBar/>
            <BoardHeader/>
            <Lists lists={lists} handleDeleteList={this.handleDeleteList} handleAddList={this.handleAddList} handleEditList={this.handleEditList} handleAddCard={this.handleAddCard} handleDeleteCard={this.handleDeleteCard} handleEditCard={this.handleEditList}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  // lists: state.lists,
  // listIds: state.listIds,
  // cards: state.cards
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLists: () => { dispatch({type: 'GET_LISTS'})},
    getCards: () => { dispatch({type: 'GET_CARDS'})},
    // deleteCard: (cardId, listId) => { dispatch({type: 'DELETE_CARD'})}
  }
}

export default connect(mapStateToProps, { getLists, deleteList, addList, editList, getCards, addCard, deleteCard, editCard })(App);