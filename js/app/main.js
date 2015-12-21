define(["jquery", "app/Puzzle", "app/data", "conf/config"], function($, Puzzle, data, config) {
  var _p = new Puzzle();

  var getCssClass = function(value) {
    var map = {};
    map[config.UNTESTED]= 'grey';
    map[config.GREY] = 'grey';
    map[config.BLACK] = 'black';
    map[config.WHITE] = 'white';
    map['CONFLICT'] = 'red';
    return map[value];
  };

  var addCssClass = function(elem, value) {
    $(elem)
        .removeClass(getCssClass(config.UNTESTED))
        .addClass(getCssClass(value));
  };
  
  var resolveCssClass = function(elem, rowValue, columnValue) {
    var value = rowValue;
    if(rowValue !== columnValue) {
        if (rowValue === config.GREY) {
            value = columnValue;
        }
        else if (columnValue !== config.GREY) {
            value = 'CONFLICT';
        }
    }
    addCssClass(elem, value);
  };

  var updateCellContents = function(elem, x, y) {
      $(elem).html(x + ", " + y);
  };

  $(document).ready(function() {
    $('td').addClass(config.UNTESTED);
    _p.loadData(data);

    var rows = $('tr');
    _p.addresses.each(function(a) {
      var row = rows.get(a.row);
      var cols = $(row).find('td');
      addCssClass(cols.get(a.column), config.BLACK);
    });
    var compiledCols = [];
    _p.columns.forEach(function(c) {
        compiledCols.push(c.compile());
    });
    for(var i=0; i<config.gridSize; i++) {
        var tr = rows.get(i);
        var compiledRow = _p.rows[i].compile();
        var cols = $(tr).find('td');
        for(var j=0; j<config.gridSize; j++) {
            resolveCssClass(cols.get(j), compiledRow[j], compiledCols[j][i]);
            updateCellContents(cols.get(j), compiledRow[j], compiledCols[j][i]);
        }
    }

  });
});
