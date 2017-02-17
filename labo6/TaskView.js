
var TaskView = Backbone.View.extend({
    tagName: 'li',

    my_template: _.template($('#taskTemplate').html()),

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html(
            this.my_template(this.model.toJSON()));
    }
});