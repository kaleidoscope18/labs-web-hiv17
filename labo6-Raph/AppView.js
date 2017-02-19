/**
 * Created by Raphael on 2017-02-18.
 */
app.TaskView = Backbone.View.extend({
    tagName: 'ul',
    template: _.template($('#taskTemplate').html()),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.edit');
        return this;
    },
    initialize: function(){
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },
    events:{
        'keypress .edit': 'updateOnEnter',
        'click #destroy': 'destroy'
    },
    updateOnEnter: function(e){
        if(e.which == 13){
            var value = this.input.val().trim();
            if(value){
                this.model.save({task: value});
            }
        }
    },
    destroy: function(){
       this.model.destroy();
    }
});

app.AppView = Backbone.View.extend({
    el: '#tasksApp',
    initialize: function(){
        console.log('Init app view');
        this.input = $('#newTask');
        this.refresh(this.update);
    },
    events:{
        'keypress #newTask': 'createTaskOnEnter'
    },
    createTaskOnEnter: function(e){
        if(e.which !== 13 || !this.input.val().trim()){
            return;
        }
        console.log('creating task: ' + this.input.val().trim());
        app.collection.create({task: this.input.val().trim()});
        var view = new app.TaskView({model: new app.TaskModel({task: this.input.val().trim()})});
        $('#taskList').append(view.render().el);
        this.input.val('');
    },
    refresh: function(callback){
        console.log('refreshing...');
        app.collection.fetch({
            success: function () {
                console.log('fetch success');
                callback();
            }
        });
    },
    update: function () {
        console.log('updating view, elements: ' + app.collection.length);
        this.$('#taskList').empty();
        app.collection.each(function(task){
            console.log('adding new task item');
            var view = new app.TaskView({model: task});
            this.$('#taskList').append(view.render().el);
        });
    }
});

app.appView = new app.AppView();
