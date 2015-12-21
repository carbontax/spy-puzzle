define(["app/Utils", "app/RunList"], function(Utils, RunList) {
  var Sequence = function(data) {
    this.runs;
    this.loadData(data);
  };

  Sequence.prototype.loadData = function(data) {
    var self = this;
    this.runs = new RunList();
    if(Utils.isArray(data)) {
      data.forEach(function(r) {
        self.runs.add(r);
      });
    }
  };

  Sequence.prototype.minLength = function() {
    return this.runs.minLength();
  };

  Sequence.prototype.compile = function() {
    return this.runs.compile();
  };

  return Sequence;
});
