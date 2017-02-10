/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var myurl = "http://localhost:5000/tasks";

var addTask = function(idTask, textTask) {
    $(".taskList").append($('<input type="text" id="'+idTask+'" value="' + textTask + '">'));
    $("#"+idTask).prepend($('<input type="button" class="delete-btn" id="delBtn-'+idTask+'" value="del"/>'))
        .click(deleteTask(idTask));
};

var refresh = function(data) {
    $(".taskList").empty();
    $.each(data.tasks, function(index, value) {
        addTask(value.id, value.task);
    })
};

var postTask = function(text){
    return function () {
        $.ajax({
            url : myurl,
            type : 'POST',
            data : JSON.stringify({'task': text}),
            contentType: 'application/json'
        })
            .done(function(data) {
                updateList();
            })
            .fail(function() {
                console.log("error");
            });
    }
};

var updateList = function() {
    $.ajax({
        url: myurl,
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

var deleteTask = function(id){
    console.log('delete');
    return function() {
        $.ajax({
            url: myurl + '/' + id,
            type: 'DELETE'
        })
            .done(function() {
                updateList();
            })
            .fail(function() {
                console.log("failed to delete task");
            });
    }
};

$(document).ready( function() {
    $("#taskInputBtn").click(postTask('Nouvelle tâche'));
    updateList();
});