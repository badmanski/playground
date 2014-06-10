var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'edit/:id': 'form',
    'new': 'form',
  }
});
