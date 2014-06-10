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
var userForm = new UserForm();
var router = new Router();

router.on('route:index', function() {
  users.render();
});

router.on('route:form', function() {
  userForm.render();
});

Backbone.history.start();
