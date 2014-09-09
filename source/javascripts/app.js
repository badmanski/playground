var autocomplete;
var componentForm = {
  street_number: 'long_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'long_name',
  country: 'long_name',
  postal_code: 'long_name'
}

function initialize() {
  autocomplete = new google.maps.places.Autocomplete(
    ($('#autocomplete')[0]),
    { types: ['geocode'] });
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress();
  });
}

function fillInAddress() {
  var place = autocomplete.getPlace();

  resetForm();

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

function resetForm() {
  document.getElementById('address-form').reset()
}

$(function() {
  initialize();

  $('#autocomplete').on('input', function() {
    if ($(this).val() == '')
      resetForm();
  })
});
