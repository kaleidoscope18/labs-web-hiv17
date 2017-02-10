/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var myurl = "http://localhost:5000/tasks";

var addTask = function(idTask, textTask) {
    $(".taskList").empty();
    $(".taskList").append($('<ul id="'+idTask+'">'+textTask+'</ul>'));
    $("#"+idTask).prepend($('<input type="button" class="delete-btn" id="delBtn-'+idTask+'" value="del"/>'))
};

var refresh = function(data) {
    $.each(data.tasks, function(index, value) {
        addTask(value.id, value.task);
    })
};

var emptyInputArea = function() {
  $("#taskInputArea").val('Nouvelle tâche');
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
            emptyInputArea();
        })
        .fail(function(jqXHR, textStatus) {
            console.log("error");
        });

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

$(document).ready( function() {
    $("#taskInputBtn").click(postTask);
    $("#refreshBtn").click(updateList);
});