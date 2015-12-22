define(["conf/config", "app/Utils", "app/Sequence"], function(config, Utils, Sequence) {
  QUnit.module('Sequence', {
    beforeEach: function() {
      this.row1 = new Sequence(0, [3,1,1]);
      this.row2 = new Sequence(1, [1]);
      this.row3 = new Sequence(2, [1,1,1,2]);
    }
  });

  QUnit.test('Minimum length', function(assert) {
    assert.ok(this.row1);
    var min = 7;
    assert.equal(this.row1.minLength(), min, "Minimum length of 'trimmed' runs should be " + min);
  });
});
