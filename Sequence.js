var Run = function(offset, count) {
  this.offset = offset;
  this.count = count;
};

var RunList = function() {
  this.runs = [];
};

RunList.prototype.add = function(data) {
  var self = this;
  var offset = 0;
  var run = new Run(offset, data);
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

