var Users = Backbone.Collection.extend({
  url: '/users'
});

var UserList = Backbone.View.extend({
  el: '#list',
  render: function() {
    var scope = this;
    var users = new Users();
    users.fetch({
      success: function(data) {
        var template = _.template($('#user-list-template').html(), { users: data });
        scope.$el.html(template);
      }
    });
  }
});
