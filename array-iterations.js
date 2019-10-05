
/**
 * Js Benchmarks
 *
 * Benchmarking for loop, map and reduce functions.
 */

function test(title, testFunction) {
  var startTime = Date.now(),
      result = testFunction();
  console.log(title, ":", Date.now() - startTime, "Milliseconds");
  if(result) {
    console.log(result);
  }
  return '--- Test End ---';
}

var SOURCE = (function () {
      var arr = [];
      for(var i = 0; i < 100000; i++) {
        arr.push(i);
      }
      return arr;
    })();

test("For loop", function () {

  var arr = [];
  for(var i = 0, length = SOURCE.length; i < length; i++) {
    arr.push(SOURCE[i]);
  }

});

test("Map function", function () {

  var arr = [];
  SOURCE.map(function (val) {
    arr.push(val);
  });

});

test("Reduce function", function () {

  SOURCE.reduce(function (arr, val) {
    arr.push(val);
    return arr;
  }, []);

});

test("Some function", function () {

  var arr = [];
  SOURCE.some(function (val) {
    arr.push(val);
  });

});

test("Some with this", function () {

  SOURCE.some(function (val) {
    this.push(val);
  }, []);

});

test("For Each function", function () {

  var arr = [];
  SOURCE.forEach(function (val) {
    arr.push(val);
  });

});
