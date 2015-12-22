require(['app/RunList'], function(RunList) {

  QUnit.test('create empty RunList', function(assert) {
    var runlist = new RunList();
    assert.ok(runlist);
  });

  QUnit.test('compile without master data', function(assert) {
    var runlist = new RunList();
    runlist.add(3);
    runlist.add(1);
    runlist.add(1);
    var arr = [3,3,3,3,3,3,3,3];
    runlist.compile(arr);
    assert.deepEqual(arr, [3,1,1,3,3,3,3,3], "Partially determined row");
  });

  QUnit.test('compile with master data', function(assert) {
    var runlist = new RunList();
    runlist.add(3);
    runlist.add(1);
    runlist.add(1);
    var arr = [3,3,3,3,3,3,2,3];
    runlist.compile(arr);
    assert.deepEqual(arr, [3,1,1,3,3,3,2,1], "Partially determined row");
  });

  QUnit.test('create full RunList', function(assert) {
    var runlist = new RunList();
    runlist.add(1);
    runlist.add(1);
    runlist.add(1);
    runlist.add(2);
    var master = [3,3,3,3,3,3,3,3];
    runlist.compile(master);
    assert.deepEqual(master, [1,2,1,2,1,2,1,1]);
  });
});
