/**
 * Created by Nadia on 2017-02-16.
 */

var TaskCollection = Backbone.Collection.extend({
    model : Task,
    url: "http://localhost:5000/tasks"
});