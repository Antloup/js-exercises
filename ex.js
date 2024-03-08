// Instructions:
// Go to https://www.typescriptlang.org/play
// Paste me
// TS Config -> Select Lang Javascript / Uncheck Strict / Uncheck NoImplicitAny
// Complete the code, run, succeed !
// Tips: use details and revealHint if you struggle ;)

console.clear();

// OPERATORS //

/**
 * Write a function that takes a number (n) as argument. Return 'odd' if its odd, 'even' otherwise.
 * 
 * @param {number} n 
 * @returns {'odd' | 'even'}
 */
function evenOrOdd(n) {
  // Your code here
}

// STRINGS //


/**
 * Write a function that takes a string (str) and a number (n) as argument. Return the nth character of 'str'.
 * 
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
function nthCharater(str, n) {
  // Your code here
}


/**
 * Write a function that takes a string (str) as argument. Return the first half of str (rounded up).
 * 
 * @param {string} str
 * @returns {string}
 */
function firstHalf(str) {
  // Your code here
}

/**
 * Write a function that takes two strings (str and c) as arguments. Return the number of times c occurs in str.
 * 
 * @param {string} str
 * @param {string} c
 * @returns {number}
 */
function numberOccurence(str, c) {
  // Your code here
}

// ARRAYS //

/**
 * Write a function that takes an array of int (arr) as argument. Return the number of negative number in arr.
 * 
 * @param {number[]} arr
 * @returns {number}
 */
function negativeCount(arr) {
  // Your code here
}

/**
 * Write a function that takes an array of int (arr) as argument. Return true if all elements in arr are the same, false otherwise.
 * 
 * @param {number[]} arr
 * @returns {boolean}
 */
function sameElements(arr) {
  // Your code here
}

/**
 * Write a function that takes a string (str) as argument. Return the reverse of str.
 * 
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  // Your code here
}

// OBJECTS //


/**
 * Write a function that takes an object (obj) and an operator (op, either 'add', 'sub', 'mul') as argument.
 * obj contains a and b attributes, both optional number.
 * Return the result of the operation between attribute a and attribute b of the object. If the number does not exists, replace it by 1.
 * 
 * @param {object} obj
 * @param {'add' | 'sub' | 'mul'} op
 * @returns {number}
 */
function opOnObject(obj, op) {
  // Your code here
}

/**
 * Write a function that takes an array of objects (arr) as argument.
 * arr is an array of object containing firstname and lastname attributes, both optional string.
 * Return an array containing the first letter of firstname and the complete lastname. Replace unknown names with X
 * (Eg. firstname: "John" lastname: "Doe", output: "J Doe")
 * 
 * @param {object[]} arr
 * @returns {string[]}
 */

function formatName(arr) {
  // Your code here
}


// Don't mind all that //

function testFn(func, tests) {
    const results = tests.map(({params}) => func(...params));
    return {succeed: tests.every(({expected}, index) => typeof expected === 'object' ? JSON.stringify(expected) === JSON.stringify(results[index]) : expected === results[index]), actual: results, expected: tests.map(({expected}) => expected)};
}

function printResult(test, result) {
    let output = `Test ${test.fn.name} ${result.succeed ? 'succeeded' : 'failed'}`;
    
    if (test.details) {
      output += ` (Actual: ${result.actual}, Expected: ${result.expected})`;
    }
    if (test.revealHint) {
      output += ` (Hint: ${atob(test.hint)})`;
    }
    console.log(output);
}

const testSuite = [
  {
    fn: evenOrOdd,
    inOut: [{params: [1], expected: 'odd'}, {params: [6], expected: 'even'}, {params: [-42], expected: 'even'}, {params: [1773], expected: 'odd'}],
    details: false,
    revealHint: false,
    hint: 'T3BlcmF0b3IgJSBpcyBmb3IgbW9kdWxvLCB5b3UgY2FuIGFsc28gdXNlIHRlcm5hcnkgb3BlcmF0b3IgIQ'
  },
  {
    fn: nthCharater,
    inOut: [{params: ['abcd',1], expected: 'a'}, {params: ['zyxbwpl',5], expected: 'w'}, {params: ['gfedcba',3], expected: 'e'}],
    details: false,
    revealHint: false,
    hint: 'SSBiZWxpZXZlIGluIHlvdSA7KQ=='
  },
  {
    fn: firstHalf,
    inOut: [{params: ['abcd'], expected: 'ab'}, {params: ['Javascript'], expected: 'Javas'}, {params: ['Hello World'], expected: 'Hello '}],
    details: false,
    revealHint: false,
    hint: 'VXNlIHNsaWNlIGFuZCBNYXRoIG9iamVjdA'
  },
  {
    fn: numberOccurence,
    inOut: [
      {params: ['how many times does the character occur in this sentence?', 'm'], expected: 2},
      {params: ['how many times does the character occur in this sentence?', 'h'], expected: 4},
      {params: ['how many times does the character occur in this sentence?', '?'], expected: 1},
      {params: ['how many times does the character occur in this sentence?', 'z'], expected: 0}
      ],
    details: false,
    revealHint: false,
    hint: 'VXNlIGEgZm9yIGxvb3AgYW5kIGEgY291bnRlciB2YXJpYWJsZQ'
  },
  {
    fn: negativeCount,
    inOut: [
      {params: [[1,2,3,4]], expected: 0},
      {params: [[1,-2,3,-4]], expected: 2},
      {params: [[-1,-22,-333]], expected: 3},
      ],
    details: false,
    revealHint: false,
    hint: 'VXNlIHJlZHVjZSBhbmQgYW4gYW5vbnltb3VzIGZ1bmN0aW9u'
  },
  {
    fn: sameElements,
    inOut: [
      {params: [[1,2,3,4]], expected: false},
      {params: [[-42,-42,-42]], expected: true},
      {params: [[100,100,10]], expected: false},
      ],
    details: false,
    revealHint: false,
    hint: 'VXNlIGV2ZXJ5IGFuZCBhbiBhbm9ueW1vdXMgZnVuY3Rpb24'
  },
  {
    fn: reverseString,
    inOut: [{params: ['hello'], expected: 'olleh'}, {params: ['Javascript'], expected: 'tpircsavaJ'}],
    details: false,
    revealHint: false,
    hint: 'VXNlIHNwbGl0LCBqb2luIGFuZCByZXZlcnNlIChBcnJheSk'
  },
  {
    fn: opOnObject,
    inOut: [{params: [{a: 38, b:4}, 'add'], expected: 42}, {params: [{a: 3, b:14}, 'mul'], expected: 42}, {params: [{b:43}, 'sub'], expected: -42}, {params: [{a:42}, 'mul'], expected: 42}, {params: [{}, 'sub'], expected: 0}],
    details: false,
    revealHint: false,
    hint: 'VXNlID8/IG9wZXJhdG9ycw=='
  },
  {
    fn: formatName,
    inOut: [{params: [[{firstname: "John", lastname: "Doe"}, {lastname: "Mysterious"}, {}]], expected: ['J Doe', 'X Mysterious', 'X X']}],
    details: false,
    revealHint: false,
    hint: 'VXNlIGJhY2sgdGljayBgIHRvIGZvcm1hdCB0aGUgb3V0cHV0'
  }
];

testSuite.map((test) => printResult(test, testFn(test.fn, test.inOut)));
