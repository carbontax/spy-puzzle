require(['app/RunList'], function(RunList) {

  QUnit.test('create empty RunList', function(assert) {
    var runlist = new RunList();
    assert.ok(runlist);
  });

  QUnit.test('create partially black RunList', function(assert) {
    var runlist = new RunList();
    runlist.add(3);
    runlist.add(1);
    runlist.add(1);
    var arr = runlist.compile();
    assert.deepEqual(arr, [3,1,1,3,3,3,3,3], "Partially determined row");
    //assert.deepEqual(arr, [3,1,3,3,3]);
  });

  QUnit.test('create full RunList', function(assert) {
    var runlist = new RunList();
    runlist.add(1);
    runlist.add(1);
    runlist.add(1);
    runlist.add(2);
    var arr = runlist.compile();
    assert.deepEqual(arr, [1,2,1,2,1,2,1,1]);
  });
});
