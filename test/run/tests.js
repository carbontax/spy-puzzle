require(['app/Run'], function(Run) {

  QUnit.test('create empty Run', function(assert) {
    var run = new Run();
    assert.ok(run);
  });

  QUnit.test('compile Run with no master data', function(assert) {
    var run = new Run(0,3);
    var master = [3,3,3,3,3,3,3,3];
    var testing = [0,0,0,0,0,0,0,0];
    run.compile(master, testing, 2);
    assert.deepEqual(testing, [3,3,1,3,3,2,0,0], "Partially determined row");
  });

  QUnit.test('compile Run with master data', function(assert) {
    var run = new Run(0,3);
    var master = [1,3,3,3,3,3,3,3];
    var testing = [1,0,0,0,0,0,0,0]
    run.compile(master,testing, 2);
    assert.deepEqual(testing, [1,1,1,2,2,2,0,0], "Partially determined row");
  });

});
