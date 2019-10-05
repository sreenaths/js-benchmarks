/**
 * Js Benchmarks
 *
 * Benchmarking declarations.
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

test('Declaring a closure at the top', function () {
  function fooClose(i) {
    var a;
    function foo() {
      a = i + 1; // Posible optimisation polyfill
    }
    if(i % 10 == 0) {
      a = i + 1; // Posible optimisation polyfill
    }
  }

  for(var i = 0; i < ITERATIONS; i++) {
    fooClose(i);
  }
});

test('Declaring a closure in a condition', function () {
  function fooClose() {
    var a, b;
    if(i % 10 == 0) {
      function foo() {
        a = i + 1; // Posible optimisation polyfill
      }
      a = i + 1; // Posible optimisation polyfill
    }
  }

  for(var i = 0; i < ITERATIONS; i++) {
    fooClose();
  }
});
