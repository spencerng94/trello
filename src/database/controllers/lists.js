//models
var List = require('../models/listSchema.js');
var bodyParser  = require('body-parser');


// 
exports.getLists = function (req, res){
    List.find(function (error, lists){
        if(lists){
            res.json(lists);
        }else if(error){
            console.log("error from getLists" + error.stack);
        }
    });
}
