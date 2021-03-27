let BASE_URL = 'http:localhost:3001';

export {BASE_URL};

if (process.env.REACT_APP_ENV === "production") {
  BASE_URL = "http://trello-board-app.herokuapp.com"
} 