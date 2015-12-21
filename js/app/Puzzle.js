define(["app/Utils", "app/Addresses", "app/Sequence", "conf/config"], function(Utils, Addresses, Sequence, config) {
  var Puzzle = function() {
    this.addresses = new Addresses();
    this.rows = [];
    this.columns = [];

    this.addRow = function(data) {
      this.rows.push(new Sequence(data));
    };

    this.loadData = function(data) {
      var self = this;
      if(Utils.isArray(data.constants)) {
        this.addresses = new Addresses(data.constants);
      }
      data.rows.forEach(function(row) {
        self.rows.push(new Sequence(row));
      });
    };
  };
  return Puzzle;
});

