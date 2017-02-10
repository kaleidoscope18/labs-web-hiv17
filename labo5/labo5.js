/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var addTask = function(textTask, idTask) {
    $(".taskList").append($('<ul id="'+idTask+'">'+textTask+'</ul>'));
}

var updateListMock = function() {
    addTask("blabla", "lol");
    console.log("bla");
}

var updateList = function() {
    // $(".taskList").
}

$(document).ready( function() {
    $("#taskInputBtn").click(updateListMock);
    $("#refreshBtn").click(updateList);
})