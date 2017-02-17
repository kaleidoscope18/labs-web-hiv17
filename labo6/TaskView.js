/**
 * Created by Nadia on 2017-02-16.
 */

var template = function(id){ //template helper
    return _.template( $('#' + id).html() );
};

var TaskView = Backbone.View.extend({
    tagName: 'li',

    template: template('taskTemplate'),

    initialize: function(){
        this.render();
    },

    events: {
        'click .edit' : 'editTask'
    },

    editTask: function(){
        var newTask = prompt("Please enter new task", this.model.get('task'));
        this.model.set('task', newTask);
    },

    render: function(){
        this.$el.html(
            this.template(this.model.toJSON()));
        return this; // for chaining
    }
});