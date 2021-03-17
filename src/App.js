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
      cards: [],
      editingList: false,
      editingCard: false,
      addingCard: false,
      currentAddList: 0,
      currentNewCardName: '', 
      currentEditList: 0,
      currentNewListName: '',
      currentEditCard: 0,
      currentEditCardName: '',
      currentEditCardList: 0
    };
    this.onGetCards = this.onGetCards.bind(this);
    this.onGetLists = this.onGetLists.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleEditList = this.handleEditList.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleEditCard = this.handleEditCard.bind(this);
    this.showEditList = this.showEditList.bind(this);
    this.showEditCard = this.showEditCard.bind(this);
    this.showAddCard = this.showAddCard.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
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
    console.log(cardId, listId, newCardTitle, 'made it here line 61');
    this.props.editCard(cardId, listId, newCardTitle);
  }

  showEditList(listId) {
    this.setState({
      editingList: !this.state.editingList,
      currentEditList: listId
    })
  }

  showEditCard(listId, cardId) {
    console.log(this.state.editingCard, 'made it to editCard')
    this.setState({
      editingCard: !this.state.editingCard,
      currentEditCardList: listId,
      currentEditCard: cardId
    })
  }

  showAddCard(listId) {
    console.log(this.state.addingCard, 'made it to AddingCard')
    this.setState({
      addingCard: !this.state.addingCard,
      currentAddList: listId
    })
  }

  handleCardChange(event) {
    this.setState({
      currentNewCardName: event.target.value
    })
  }

  handleListChange(event) {
    this.setState({
      currentNewListName: event.target.value
    })
  }

  componentDidMount() {
    this.onGetLists();
    this.onGetCards();
  }

  render() {
    const {lists, listIds, cards} = this.state;
    
    return (
        <div className="App">
            <NavBar/>
            <BoardHeader/>
            <Lists lists={lists} handleDeleteList={this.handleDeleteList} handleAddList={this.handleAddList} handleEditList={this.handleEditList} handleAddCard={this.handleAddCard} handleDeleteCard={this.handleDeleteCard} handleEditCard={this.handleEditCard} editingList={this.state.editingList} showEditList={this.showEditList} showEditCard={this.showEditCard} editingCard={this.state.editingCard} addingCard={this.state.addingCard} showAddCard={this.showAddCard} currentAddList={this.state.currentAddList} currentNewCardName={this.state.currentNewCardName} handleCardChange={this.handleCardChange} currentEditList={this.state.currentEditList} handleListChange={this.handleListChange} currentNewListName={this.state.currentNewListName} currentEditCardList={this.state.currentEditCardList} currentEditCard={this.state.currentEditCard}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
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