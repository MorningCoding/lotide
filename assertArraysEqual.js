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

