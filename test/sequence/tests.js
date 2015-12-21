define(["conf/config", "app/Utils", "app/Sequence"], function(config, Utils, Sequence) {
  QUnit.module('Sequence', {
    beforeEach: function() {
      this.row1 = new Sequence([3,1,1]);
      this.row2 = new Sequence([1]);
      this.row3 = new Sequence([1,1,1,2]);
    }
  });

  QUnit.test('Minimum length', function(assert) {
    assert.ok(this.row1);
    var min = 7;
    assert.equal(this.row1.minLength(), min, "Minimum length of 'trimmed' runs should be " + min);
  });

  QUnit.test('Compile row1', function(assert) {
    assert.ok(this.row1);
    var compiled = this.row1.compile();
    assert.ok(Utils.isArray(compiled), "Compile function returns array");
    assert.deepEqual(compiled.length, config.gridSize, "Correct compiled length");
    assert.deepEqual(compiled, [3,1,1,3,3,3,3,3], "Partially determined row");
  });

  QUnit.test('Compile row2', function(assert) {
    assert.ok(this.row2);
    var compiled = this.row2.compile();
    assert.ok(Utils.isArray(compiled), "Compile function returns array");
    assert.deepEqual(compiled.length, config.gridSize, "Correct compiled length");
    assert.deepEqual(compiled, [3,3,3,3,3,3,3,3], "Fully undetermined row");
  });

  QUnit.test('Compile row3', function(assert) {
    assert.ok(this.row3);
    var compiled = this.row3.compile();
    assert.deepEqual(compiled.length, config.gridSize, "Correct compiled length");
    assert.ok(Utils.isArray(compiled), "Compile function returns array");
    assert.deepEqual(compiled, [1,2,1,2,1,2,1,1], "Fully determined row");
  });

});
