define(["conf/config"], function(config) {
  var Run = function(offset, count) {
    this.offset = offset;
    this.count = count;
    this.slack = 0;
  };

  Run.prototype.compile = function(arr, slack) {
    var self = this;
    self.slack = slack;
    self.permutations(function(m) {
      self.compute(arr, m);
    });
  };

  Run.prototype.permutations = function(callback) {
    var self = this, arr = this.initCompiledArray();
    for (var i=0; i<=self.slack; i++) {
      callback(arr);
      self.rotate(arr);
    }
  };

  Run.prototype.rotate = function(arr) {
    arr.unshift(config.WHITE);
    arr.pop();
  };

  Run.prototype.compute = function(arr, me) {
    var self = this;
    for(var i=0; i<me.length; i++) {
      var arrIndex = self.offset + i;
      if(arrIndex > arr.length - 1) {
        break;
      }
      var value = me[i];
      if(arr[arrIndex] === config.UNTESTED || arr[arrIndex] === value) { 
        arr[arrIndex] = value;
      } else {
        arr[arrIndex] = config.GREY;
      }
    }
  };

  Run.prototype.initCompiledArray = function() {
    var arr = [];
    for (var i = 0; i < this.count; i++) {
      arr[i] = config.BLACK;
    }
    var end = this.count + 1 + this.slack;
    for (var i = this.count; i < end; i++) {
      arr[i] = config.WHITE;
    }
    return arr;
  };
  return Run;
});
