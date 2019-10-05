
/**
 * Js Benchmarks
 *
 * Benchmarking function calls.
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

test('Wrapping arguments in closure #1', function () {
  var c, foo;

  function fooClose(a, b, c, d) {
    return function foo(e, f, g, h) {
      c = a + b + c + d + e + f + g + h; 
    }
  }

  foo = fooClose(1, 2, 3, 4);

  for(var i = 0; i < ITERATIONS; i++) {
    foo(5, 6, 7, 8);
  }
});

test('Wrapping arguments in closure #2', function () {
  var c, foo;

  function fooClose(a, b) {
    return function foo(c, d) {
      c = a + b + c + d;
    }
  }

  foo = fooClose(1, 2);

  for(var i = 0; i < ITERATIONS; i++) {
    foo(3, 4);
  }
});

test('Passing all values as args #1', function () {
  var c;

  function foo(a, b, c, d, e, f, g, h) {
    c = a + b + c + d + e + f + g + h; 
  }

  for(var i = 0; i < ITERATIONS; i++) {
    foo(1, 2, 3, 4, 5, 6, 7, 8);
  }
});

test('Passing all values as args #2', function () {
  var c;

  function foo(a, b, c, d) {
    c = a + b + c + d; 
  }

  for(var i = 0; i < ITERATIONS; i++) {
    foo(1, 2, 3, 4);
  }
});
