define(["app/Utils", 
"app/Addresses", 
"app/RowSequence", 
"app/ColSequence", 
"conf/config"], function(Utils, Addresses, RowSequence, ColSequence, config) {
  var createGrid = function() {
    var grid = [];
    for(var i=0; i<config.gridSize; i++) {
      grid[i] = [];
      for(var j=0; j<config.gridSize; j++) {
          grid[i][j] = config.GREY;
      }
    }
    return grid;
  };

  var Puzzle = function() {
    this.addresses = new Addresses();
    this.rows = [];
    this.columns = [];
    this.grid = createGrid();

    this.addRow = function(index, data) {
      this.rows.push(new RowSequence(index, data));
    };

    this.addColumn = function(index, data) {
      this.columns.push(new ColSequence(index, data));
    };

    this.loadData = function(data) {
      var self = this;
     
      if(Utils.isArray(data.constants)) {
        this.addresses = new Addresses(data.constants);
      }
      var i = 0;
      data.rows.forEach(function(row) {
          self.addRow(i++, row);
      });

      i = 0;
      data.columns.forEach(function(col) {
        self.addColumn(i++, col);
      });
    };

    this.initGridConstants = function(callback) {
      var self = this;   
      self.addresses.each(function(a) {
         self.grid[a.row][a.column] = config.BLACK;
         callback();
      });
      return this;
    };
  };
  return Puzzle;
});

