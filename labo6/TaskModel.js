/**
 * Created by Nadia on 2017-02-16.
 */
Task = Backbone.Model.extend({

    urlRoot: '/tasks',

    defaults: {
        task: 'New Task'
    },
    initialize: function(){
        this.on("change:task", function(model){
            var task = model.get("task")
            alert("Changed task to " + task);
        })
    }
})