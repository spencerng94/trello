import database from './index.js';
import Board from './models/boardSchema.js';
// import Card from './models/cardSchema.js';
// import List from './models/listSchema.js';


// FUNCTION TO SEED BOARD
let seedBoard = function () {
    var promiseArr = [];
    const currentDate = new Date();

        let dummyBoard = new Board({
            board_id: 1,
            board_name: 'New Board',
            created_date: currentDate,
            updated_date: undefined,
            _lists: undefined
        })
    
    promiseArr.push(dummyBoard);
    return Promise.all(promiseArr).catch(err => console.log(err))
};


// // DROP DB IF EXISTS
// Board.database.dropDatabase(function(err, results) {
//     if(err) {
//         console.log(err, 'error from dropdb')
//     } else {
//         console.log(results, 'results from dropdb')
//     }
// })

// COMMAND TO SEED BOARD TABLE
const insertBoard = function() {
    seedBoard()
        .then(() => console.log('successful insertBoard'))
        .catch(err => console.log(err, 'err from insertBoard'))
};

insertBoard();