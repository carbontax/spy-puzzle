define(["app/Puzzle"], function(Puzzle) {
  QUnit.module('Puzzle');

  QUnit.test('create new Puzzle', function(assert) {
    var p = new Puzzle();
    assert.ok(p, "Valid object");
    assert.ok(p.grid, "Initialized grid");
  });
});
