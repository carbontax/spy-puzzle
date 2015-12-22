define(["conf/config"], function(config) {
  var Run = function(offset, count) {
    this.offset = offset;
    this.count = count;
    this.slack = 0;
  };

  Run.prototype.compile = function(master, testing, slack) {
    var self = this;
    self.slack = slack;
    self.permutations(function(p) {
      self.compute(master, testing, p);
    });
  };

  Run.prototype.permutations = function(callback) {
    var self = this; permutation = this.initCompiledArray();
    for (var i=0; i<=self.slack; i++) {
      callback(permutation);
      self.rotate(permutation);
    }
  };

  Run.prototype.rotate = function(permutation) {
    permutation.unshift(config.WHITE);
    permutation.pop();
  };

  Run.prototype.compute = function(master, testing, me) {
    var self = this;
    if(self.contradicts(master, me)) {
      // discard this permutation
      return;
    }
    for(var i=0; i<me.length; i++) {
      var arrIndex = self.offset + i;
      if(arrIndex > testing.length - 1) {
        break;
      }
      var value = me[i];
      if(testing[arrIndex] === config.UNTESTED || testing[arrIndex] === value) { 
        testing[arrIndex] = value;
      } else {
        testing[arrIndex] = config.GREY;
      }
    }
  };

  Run.prototype.contradicts = function(master, me) {
    var self = this, contradiction = false;
    for(var i=0; i<me.length; i++) {
      var arrIndex = self.offset + i;
      if(arrIndex > master.length - 1) {
        break;
      }
      if(master[arrIndex] !== config.GREY && master[arrIndex] !== me[i]) { 
        contradiction = true;
        break;
      }
    }
    return contradiction;
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
