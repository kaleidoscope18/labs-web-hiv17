/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var refresh = function(data) {
    // var myData = JSON.parse(data);
    console.log(data);
    console.log(data.tasks);
    // $(".taskList").append($('<ul id="'+idTask+'">'+textTask+'</ul>'));
};

var updateListMock = function() {
    addTask("blabla", "lol");
    console.log("bla");
};

var updateList = function() {
    $.ajax({
        url: 'http://localhost:5000/tasks',
        type: 'GET',
        contentType: 'application/json'
    })
        .done(function(data) {
            refresh(data);
        });
};

$(document).ready( function() {
    $("#taskInputBtn").click(updateListMock);
    $("#refreshBtn").click(updateList);
});