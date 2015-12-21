define(["conf/config", "app/Run"], function(config, Run) {
  var RunList = function() {
    this.offset = 0;
    this.runs = [];
  };

  RunList.prototype.add = function(data) {
    var self = this;
    var run = new Run(self.offset, data);
    self.offset += run.count + 1;
    self.runs.push(run);
  };

  RunList.prototype.minLength = function() {
    var minLength = 0;
    this.runs.forEach(function(r) {
      minLength += r.count;
    });
    minLength += this.runs.length - 1;
    return minLength;
  }

  RunList.prototype.compile = function() {
    var self = this;
    var slack = config.gridSize - self.minLength();
    var arr = self.initCompiledArray();
    self.runs.forEach(function(r) {
      r.compile(arr, slack);
    });
    return arr;
  };

  RunList.prototype.initCompiledArray = function() {
    var arr = [];
    for (var i = 0; i < config.gridSize; i++) {
      arr[i] = 0;
    }
    return arr;
  };
  return RunList;
});
