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

  RunList.prototype.compile = function(master) {
    var self = this;
    var slack = master.length - self.minLength();
    var testing = self.copyMasterForTesting(master);
    self.runs.forEach(function(r) {
      r.compile(master, testing, slack);
    });
    for(var i=0; i<master.length; i++) {
      master[i] = testing[i];
    }
  };

  RunList.prototype.copyMasterForTesting = function(master) {
    var arr = [];
    for (var i = 0; i < master.length; i++) {
      arr[i] = master[i];
      if(arr[i] === config.GREY) {
        arr[i] = config.UNTESTED;
      }
    }
    return arr;
  };

  return RunList;
});
