define(["jquery", "app/Puzzle", "app/data"], function($, Puzzle, data) {
  var _p = new Puzzle();

  $(document).ready(function() {
    $('td').addClass('grey');
    _p.loadData(data);

    var rows = $('tr');
    _p.addresses.each(function(a) {
      var row = rows.get(a.row);
      var cols = $(row).find('td');
      $(cols.get(a.column)).removeClass('grey').addClass(a.cssClass());
    });
  });
});
