define(["app/Utils", "conf/config"], function(Utils, config) {
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

  return Address;
});
