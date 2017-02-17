/**
 * Created by Nadia on 2017-02-16.
 */
// We defined a TaskView and as we are using li tag for small
// view is TaskView that why we defined tagName: ul in
// TaskView.
var TaskViewCollection = Backbone.View.extend({
    tagName : 'ul',

    render: function(){
        this.collection.each(function(task){
            var taskView = new TaskView({ model: task });
            this.$el.append(taskView.el);
        }, this);
        return this; //returning for chaining
    }
});
