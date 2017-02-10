/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var myurl = "http://localhost:5000/tasks";

var addTask = function(textTask, idTask) {
    $(".taskList").append($('<ul id="'+idTask+'">'+textTask+'</ul>'));
}
var refresh = function(data) {
    $.each(data.tasks, function(index, value) {
        $(".taskList").append($('<ul id="'+value.id+'">'+value.task+'</ul>'));
    })
};

var postTask = function(){
    var text = $("#taskInputArea").val();
    $.ajax({
        url : myurl,
        type : 'POST',
        data : JSON.stringify({'task': text}),
        contentType: 'application/json'
    })
        .done(function(data) {
            updateList();
        })
        .fail(function(jqXHR, textStatus) {
            console.log("error");
        });

}

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
    $("#taskInputBtn").click(postTask);
    $("#refreshBtn").click(updateList);
});