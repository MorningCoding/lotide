const eqArrays = function(a,b) {
    for (let i=0; i<a.length; i++) {
        if (a[i]!==b[i]) {
            return false;
        }
    }
    return true;  
}

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const without = function(source, itemsToRemove) {
  newArray = [];  
  for (let i=0; i<source.length; i++) {
      if (itemsToRemove.includes(source[i])){
      } else {
        newArray.push(source[i]);
      }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]