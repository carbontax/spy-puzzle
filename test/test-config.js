(function () {
  requirejs.config({
    baseUrl: "../../js/lib",
    paths: {
      app: "../app",
      conf: "../../test"
    }
  });

  var testModules = [
    "tests.js"
  ];

  require(testModules, function(){
    QUnit.load();
    QUnit.start();
  });
}());

