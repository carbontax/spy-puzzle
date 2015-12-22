define(["app/Sequence"], function(Sequence) {
  var ColSequence = function(index, data) {
      Sequence.apply(this, arguments);
  };

  ColSequence.prototype = new Sequence();

  ColSequence.prototype.compile = function(grid) {
      var column = [];
      for(var i=0; i<grid.length; i++) {
          column[i] = grid[i][this.index];
      }
      this.runs.compile(column);

      // write the values back into the grid
      for(var i=0; i<grid.length; i++) {
          grid[i][this.index] = column[i];
      }
  };
  
  return ColSequence;
});
