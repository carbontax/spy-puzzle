define(["app/Utils", "app/RowSequence"], function(Utils, RowSequence) {
  QUnit.module('Sequence', {
    beforeEach: function() {
      this.row1 = new RowSequence(0, [3,1,1]);
      this.row2 = new RowSequence(1, [1]);
      this.row3 = new RowSequence(2, [1,1,1,2]);
      this.grid1 = [[3,3,3,3,3,3,3,3]];
    }
  });

  QUnit.test('Minimum length', function(assert) {
    assert.ok(this.row1);
    var min = 7;
    assert.equal(this.row1.minLength(), min, "Minimum length of 'trimmed' runs should be " + min);
  });

  QUnit.test('test compile', function(assert) {
    assert.ok(this.row1);
    var min = 7;
    this.row1.compile(this.grid1);
    assert.deepEqual(this.grid1, [[3,1,1,3,3,3,3,3]], "Compiled row values");
  });
});
