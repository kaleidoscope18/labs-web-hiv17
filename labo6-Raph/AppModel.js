/**
 * Created by Raphael on 2017-02-19.
 */
var app = {};

app.TaskModel = Backbone.Model.extend({

});

app.TaskCollection = Backbone.Collection.extend({
    model: app.TaskModel,
    url: "http://localhost:5000/tasks",
    initialize: function(){
        console.log('Init collection model');
        this.on('add', function(model){
            console.log('something added');
        });
        this.on('remove', function (model) {
            console.log('something removed')
        });
        this.on('change', function(model){
            console.log('something changed')
        });
    },
    parse: function (data) {
        return data.tasks;
    }
});

app.collection = new app.TaskCollection();