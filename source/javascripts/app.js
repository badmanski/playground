$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
  options.url = 'http://node.dev:3000' + options.url
});

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
}

var users = new UserList();
var router = new Router();

router.on('route:index', function() {
  users.render();
});

Backbone.history.start();
