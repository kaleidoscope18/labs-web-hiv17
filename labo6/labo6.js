var template = function(id){ //template helper
    return _.template( $('#' + id).html() );
};

var taskCollect = new TaskCollection([]);
var tasksView = new TaskViewCollection({collection : taskCollect});
