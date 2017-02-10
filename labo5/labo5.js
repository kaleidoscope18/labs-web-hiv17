/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var myurl = "http://localhost:5000/tasks";

var addTask = function(idTask, textTask) {
    $(".taskList").append($(
        '<div>'
            + '<input type="text" id="text' + idTask + '" value="' + textTask + '">'
            + '<input type="button" id="del' + idTask + '" class="delete-btn" value="delete"/>'
            + '<input type="button" id="edit' + idTask + '" class="edit-btn" value="edit"/>'
        + '</div>'));
    $('#del' + idTask).click(deleteTask(idTask));
    $('#edit' + idTask).click(putTask(idTask));
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

var putTask = function(id){
    return function(){
        $.ajax({
            url : myurl + '/' + id,
            type : 'PUT',
            data : JSON.stringify({'task': $('#text' + id).val()}),
            contentType: 'application/json'
        })
            .done(function() {
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
    return function() {
        console.log(id);
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