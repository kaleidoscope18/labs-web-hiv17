/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var refresh = function(data) {
    $.each(data.tasks, function(index, value) {
        $(".taskList").append($('<ul id="'+value.id+'">'+value.task+'</ul>'));
    })
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
        })
        .fail(function() {
            console.log("failed to get data");
        });
};

$(document).ready( function() {
    $("#taskInputBtn").click(updateListMock);
    $("#refreshBtn").click(updateList);
});