$(document).ready(function() {
  $('td').addClass('grey');
  var row1 = new Sequence(data.rows[0]);
  console.log("Row 1 minimum length is: " + row1.minLength());

  var rows = $('tr');
  var addresses = new Addresses(data.constants);
  addresses.each(function(a) {
     var row = rows.get(a.row);
     var cols = $(row).find('td');
     $(cols.get(a.column)).removeClass('grey').addClass(a.cssClass());
  });
});
