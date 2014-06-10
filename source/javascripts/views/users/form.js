var UserForm = Backbone.View.extend({
  el: '#form',
  render: function() {
    var template = _.template($('#user-form-template').html());
    this.$el.html(template);
  },
  events: {
    'submit #user-form': 'createUser'
  },
  createUser: function(e) {
    var userData = $(e.currentTarget).serializeObject();
    console.log(userData);
    return false;
  }
});
