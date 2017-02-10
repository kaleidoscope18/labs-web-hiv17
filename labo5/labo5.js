/**
 * Created by Nadia on 2017-02-09.
 */

var currentId = 0;

var myurl = "http://localhost:5000/tasks";

var addTask = function(textTask, idTask) {
    $(".taskList").append($('<ul id="'+idTask+'">'+textTask+'</ul>'));
}

var postTask = function(){
    var text = $("#taskInputArea").val();
    $.ajax({
        url : myurl,
        type : 'POST',
        data : {'task': text},
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
    console.log('success');
}

$(document).ready( function() {
    $("#taskInputBtn").click(postTask);
    $("#refreshBtn").click(updateList);
})