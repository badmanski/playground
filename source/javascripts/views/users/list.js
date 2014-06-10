var UserList = Backbone.View.extend({
  el: '#list',
  render: function() {
    var scope = this;
    var users = new Users();
    users.fetch({
      success: function(data) {
        var template = _.template($('#user-list-template').html(),
                                  { users: data.models });
        scope.$el.html(template);
      }
    });
  }
});
