// What do we need our function to do?
//  We want our number to return an array:
//    In the first position, we want a number.
//    In the second position, we want a string.

function sum(a, b) {
  return [a + b];
}

function multiply(num1, num2) {
  var whatever = num1 * num2;
  var string = 'The product of ' + num1 + ' and ' + num2 + ' is ' + whatever + '.';
  return [whatever, string];
}

function sumAndMultiply(num1, num2, num3) {
  // calculate summed values
  var summedTemp = sum(num1, num2)[0];
  var summedResult = sum(summedTemp, num3)[0];

// calculate multiplies values
  var multTemp = multiply(num1, num2)[0];
  var multResult = multiply(multTemp, num3)[0];

  return [summedResult, multResult, num1 +' and ' + num2 + ' and ' + num3 + ' sum to ' + summedResult + '.', 'The product of ' + num1 + ' and ' + num2 + ' and ' + num3 + ' is ' + multResult +'.'];
}

function testSumAndMultiply() {
  var testValue = sumAndMultiply(2, 3, 4);

  if (
    testValue[0] === 9 &&
    testValue[1] === 24 &&
    testValue[2] === '2 and 3 and 4 sum to 9.' &&
    testValue[3] === 'The product of 2 and 3 and 4 is 24.'
  ) {
    console.log('TEST sumAndMultiply PASSES');
  } else {
    console.log('TEST sumAndMultiply FAILS');
  }
}


function multiplyAnyArray(arr) {
  var i = 0;
  var product = 1;
  while (i < arr.length) {
    var current = arr[i];
    // product = product * current;
    product = multiply(current,[product])[0];
    i++;
  }
  return [product];
}



function testMultiply() {
  var testValue = multiply(2, 3);

  if (testValue[0] === 6 && testValue[1] === 'The product of 2 and 3 is 6.') {
    console.log('TEST multiply PASSES');
  } else {
    console.log('TEST multiply FAILS');
  }
}

function testMultiplyAnyArray() { //eslint-disable-line
  var testDynamicArray = [1, 2, 3, 4, 5];
  console.log(multiplyAnyArray(testDynamicArray));
  if (multiplyAnyArray(testDynamicArray)[0] === 120 && multiplyAnyArray(testDynamicArray)[1] === 'The numbers 1,2,3,4,5 have a product of 120.') {
    console.log('%c TEST FOR multiplyAnyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyAnyArray() FAILS', 'color: red');
  }
}


testMultiply();
testSumAndMultiply();
testMultiplyAnyArray();
