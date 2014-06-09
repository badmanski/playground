$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
  options.url = 'http://node.dev:3000' + options.url
});

var users = new UserList();
var router = new Router();

router.on('route:index', function() {
  users.render();
});

Backbone.history.start();
