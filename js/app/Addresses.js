define(["app/Utils", "app/Address", "conf/config"], function(Utils, Address, config) {
  var Addresses = function(data) {
    var self = this;
    self.addresses = [];
    if(Utils.isArray(data)) {
      data.forEach(function(x) {
        var a = new Address().fromArray(x);
        self.addresses.push(a);
      });
    }

    self.each = function(callback) {
      self.addresses.forEach(callback);
    };
  };
  return Addresses;
});
