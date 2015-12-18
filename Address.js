var Address = function(row, column, value) {
  this.row = row;
  this.column = column;
  this.value = value;
};

Address.prototype.fromArray = function(arr) {
  this.row = arr[0];
  this.column = arr[1];
  this.value = arr[2];
  return this;
};

Address.prototype.cssClass = function() {
  if(this.value === 1) {
    return 'black';
  }
  return 'white';
};

var Addresses = function(data) {
  var self = this;
  self.addresses = [];
  if(Utils.isArray(data)) {
    data.forEach(function(x) {
      self.addresses.push(new Address().fromArray(x));
    });
  }

  self.each = function(callback) {
    self.addresses.forEach(callback);
  };

};
