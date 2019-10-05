
/**
 * Js Benchmarks
 *
 * Benchmarking for opeartors.
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

var ITERATIONS = 1000000;

test("Division by 2 : Using /", function () {

  var a = 4, b;
  for(var i = 0; i < ITERATIONS; i++) {
    b = a / 2;
  }

});

test("Division by 2 : Using *", function () {

  var a = 4, b;
  for(var i = 0; i < ITERATIONS; i++) {
    b = a * .5;
  }

});

test("Division by 2 : Using >>", function () {

  var a = 4, b;
  for(var i = 0; i < ITERATIONS; i++) {
    b = a >> 1;
  }

});
