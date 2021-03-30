'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");
var router = express.Router();
var List = require('../client/src/database/models/listSchema.js');
var Card = require('../client/src/database/models/cardSchema.js');

// Get All Lists
router.get("/api/lists", function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response) {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return List.find();

                    case 3:
                        result = _context.sent;

                        console.log('result from getLists:', result);
                        response.send(result);
                        _context.next = 11;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);

                        response.status(500).send(_context.t0);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

// Add List 
router.post("/api/lists/:id", function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, response) {
        var newId, insertObject, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        newId = parseInt(request.params.id);
                        insertObject = {
                            list_id: newId,
                            list_name: "New List",
                            position: newId
                        };
                        _context2.prev = 2;
                        _context2.next = 5;
                        return List.create(insertObject);

                    case 5:
                        result = _context2.sent;

                        console.log('result from post:', result);
                        response.send(result);
                        _context2.next = 14;
                        break;

                    case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2['catch'](2);

                        console.log(_context2.t0, 'line 55');
                        response.status(500).send(_context2.t0);

                    case 14:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[2, 10]]);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

// Delete List
router.delete("/api/lists/:id", function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(request, response) {
        var result;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return List.deleteOne({ list_id: '' + request.params.id }).exec();

                    case 3:
                        result = _context3.sent;

                        console.log('result from delete:', result);

                        response.send(result);
                        _context3.next = 12;
                        break;

                    case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3['catch'](0);

                        console.log(_context3.t0, 'line 55');
                        response.status(500).send(_context3.t0);

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 8]]);
    }));

    return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}());

// Patch List Name
router.patch("/api/lists/:id", function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(request, response) {
        var newName, currentId, updateQuery, updateObject, result;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        newName = request.body.listTitle;
                        currentId = request.body.listId;
                        updateQuery = {
                            list_id: currentId
                        };
                        updateObject = {
                            list_id: currentId,
                            list_name: newName
                        };
                        _context4.prev = 4;
                        _context4.next = 7;
                        return List.updateOne(updateQuery, updateObject);

                    case 7:
                        result = _context4.sent;

                        console.log('result from patch:', result);
                        response.send(result);
                        _context4.next = 16;
                        break;

                    case 12:
                        _context4.prev = 12;
                        _context4.t0 = _context4['catch'](4);

                        console.log(_context4.t0, 'line 55');
                        response.status(500).send(_context4.t0);

                    case 16:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[4, 12]]);
    }));

    return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}());

// Get Cards
router.get('/api/cards', function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var result;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return List.aggregate([{
                            $unwind: '$_cards'
                        }]);

                    case 3:
                        result = _context5.sent;

                        res.send(result);
                        _context5.next = 10;
                        break;

                    case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5['catch'](0);

                        res.status(500).send(_context5.t0);

                    case 10:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined, [[0, 7]]);
    }));

    return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}());

// Add Card by List Id 
router.post("/api/cards/:id", function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(request, response) {
        var newId, updateQuery, result;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        newId = new Card({
                            card_id: request.body.params.cardId,
                            list_id: request.body.params.listId,
                            card_name: request.body.params.cardName,
                            position: request.body.params.position
                        });
                        updateQuery = {
                            "list_id": request.body.params.listId
                        };
                        _context6.prev = 2;
                        _context6.next = 5;
                        return List.updateOne(updateQuery, {
                            "$push": {
                                "_cards": newId
                            }
                        });

                    case 5:
                        result = _context6.sent;

                        response.send(result);
                        _context6.next = 12;
                        break;

                    case 9:
                        _context6.prev = 9;
                        _context6.t0 = _context6['catch'](2);

                        response.status(500).send(_context6.t0);

                    case 12:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined, [[2, 9]]);
    }));

    return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
}());

// Delete Card by List Id and Card Id
router.delete("/api/cards/:id", function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(request, response) {
        var deleteQuery, deleteObject, result;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        deleteQuery = {
                            "list_id": parseInt(request.query.listId)
                        };
                        deleteObject = {
                            "card_id": parseInt(request.query.cardId)
                        };
                        _context7.prev = 2;
                        _context7.next = 5;
                        return List.updateOne(deleteQuery, {
                            "$pull": {
                                "_cards": deleteObject
                            }
                        });

                    case 5:
                        result = _context7.sent;


                        console.log('result from delete:', result);

                        response.send(result);
                        _context7.next = 13;
                        break;

                    case 10:
                        _context7.prev = 10;
                        _context7.t0 = _context7['catch'](2);

                        response.status(500).send(_context7.t0);

                    case 13:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, undefined, [[2, 10]]);
    }));

    return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
}());

// Patch Card Name
router.patch("/api/cards/:id", function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(request, response) {
        var updateQuery, updateObject, result;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        updateQuery = {
                            "list_id": request.body.listId,
                            "_cards.card_id": request.body.cardId
                        };
                        updateObject = {
                            list_id: request.body.listId,
                            card_id: request.body.cardId,
                            card_name: request.body.cardTitle
                        };
                        _context8.prev = 2;
                        _context8.next = 5;
                        return List.updateOne(updateQuery, {
                            "$set": {
                                "_cards.$": updateObject
                            }
                        });

                    case 5:
                        result = _context8.sent;

                        console.log('result from patch:', result);
                        response.send(result);
                        _context8.next = 14;
                        break;

                    case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8['catch'](2);

                        console.log(_context8.t0, 'line 55');
                        response.status(500).send(_context8.t0);

                    case 14:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, undefined, [[2, 10]]);
    }));

    return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
    };
}());

module.exports = router;