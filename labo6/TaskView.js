/**
 * Created by Nadia on 2017-02-16.
 */

var TaskView = Backbone.View.extend({
    tagName: 'li',

    template: template('taskTemplate'),

    initialize: function(){
        this.model.on('change', this.render, this);
        this.render()
    },

    events: {
        'click .edit' : 'editTask'
    },

    editTask: function(){
        var newTask = prompt("Please enter new task", this.model.get('task'));
        if (!newTask) return;
        this.model.set('task', newTask);
    },

    render: function(){
        this.$el.html(
            this.template(this.model.toJSON()));
        return this; // for chaining
    }
});