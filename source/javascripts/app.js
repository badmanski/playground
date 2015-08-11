$(function() {
  $('form').validate({
    debug: true,
    rules: {
      "foo_bar": {
        required: true,
        digits: true
      }
    }
  });
});
