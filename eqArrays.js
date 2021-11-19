// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};
  

// assertEqual(process.argv[2], process.argv[3]);

const eqArrays = function(a,b) {
    for (let i=0; i<a.length; i++) {
        if (a[i]!==b[i]) {
            return false;
        }
    }
    return true;  
}

//console.log(eqArrays(process.argv[2], process.argv[3]));
//Test Cases
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false