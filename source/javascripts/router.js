var Router = Backbone.Router.extend({
  routes: {
    'users': 'index',
    'users/:id': 'show',
    'users/:id/new': 'new',
    'users/:id/edit': 'edit'
  }
});
