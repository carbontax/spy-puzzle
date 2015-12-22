define(["app/Utils", "app/Sequence"], function(Utils, Sequence) {
  var RowSequence = function(index, data) {
      Sequence.apply(this, arguments);
  };

  RowSequence.prototype = new Sequence();

  RowSequence.prototype.compile = function(grid) {
      this.runs.compile(grid[this.index]);
  };
  
  return RowSequence;
});
