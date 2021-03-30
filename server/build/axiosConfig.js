"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// the baseURL should to point to localhost in development
// and your domain in production
// const app = axios.create({
//   baseURL: process.env.NODE_ENV === 'production'
//     ? "http://trello-board-app.herokuapp.com"
//     : "http://localhost:3001/" 
// });

// Production URL
var app = _axios2.default.create({
  baseURL: "https://trello-board-app.herokuapp.com"
});

// axios consumes rejected API responses by default,
// so the configuration below intercepts the those
// responses and passes them down to the function that
// uses our custom "app" axios configuration.
app.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var err = (0, _get2.default)(error, ["response", "data", "err"]);

  // "err" refers to the response returned from the API when
  // a response is rejected. "err" can be named anything, but it
  // must be consistent across all your API routes (for example, see
  // anarchive/routes/api => verify route => "catch" sends the "err")
  return _promise2.default.reject(err ? err : error.message);
});

exports.default = app;