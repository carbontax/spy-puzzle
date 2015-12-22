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

  var updateTableFromGrid = function() {
     for(var i=0; i < _p.grid.length; i++) {
       for(var j=0; j < _p.grid.length; j++) {
         addCssClass($('tr.row_' + i + ' td.col_' + j),_p.grid[i][j]);
       }
     }
  };

  $(document).ready(function() {
    //$('td').addClass(config.UNTESTED);
    $('tr').addClass(function() {
        return 'row_' + $(this).index();
    });
    $('td').addClass(function() {
        return 'col_' + $(this).index();
    });
    _p.loadData(data);

    //var rows = $('tr');
    
    _p.initGridConstants(updateTableFromGrid);

    _p.rows.forEach(function(r) {
        r.compile(_p.grid);
        updateTableFromGrid();
    });

    _p.columns.forEach(function(c) {
        c.compile(_p.grid);
        updateTableFromGrid();
    });

  });
});
