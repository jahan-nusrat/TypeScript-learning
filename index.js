"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n    The todo with ID: " + id + " has a title of " + title + ". Is it finished? " + completed + "\n    ");
});
