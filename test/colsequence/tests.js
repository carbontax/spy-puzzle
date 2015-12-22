define(["app/Utils", "app/ColSequence"], function(Utils, ColSequence) {
  QUnit.module('Sequence', {
    beforeEach: function() {
      this.col1 = new ColSequence(0, [3,1,1]);
      this.col2 = new ColSequence(1, [1]);
      this.col3 = new ColSequence(2, [1,1,1,2]);
      this.grid1 = [[3],[3],[3],[3],[3],[3],[3],[3]];
    }
  });

  QUnit.test('Minimum length', function(assert) {
    assert.ok(this.col1);
    var min = 7;
    assert.equal(this.col1.minLength(), min, "Minimum length of 'trimmed' runs should be " + min);
  });

  QUnit.test('test compile', function(assert) {
    assert.ok(this.col1);
    var min = 7;
    this.col1.compile(this.grid1);
    assert.deepEqual(this.grid1, [[3],[1],[1],[3],[3],[3],[3],[3]], "Compiled col values");
  });
});
