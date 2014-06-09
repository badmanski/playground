var users = new UserList();
var router = new Router();

router.on('route:index', function() {
  users.render();
});

Backbone.history.start();
