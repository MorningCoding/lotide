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

const takeUntil = function(array, callback) {
    //return a slice of the array 
    //with elements taken from the beginning
    //Keep going until callback/predicate returns truthy value
    //callback should only be provided one value: the item in the array
    
    //iterate through the array
    for (let i of array) {
        //if callback is true given the array item
        //i.e. the condition is met / truthy value returned
        //return slice of the array, from beginning to index of whatever item
        if (callback(i)) {
            //console.log("one met condition");
            return array.slice(0,array.indexOf(i));
        }
    }
    //console.log("condition not met");
    return array;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//test cases
assertArraysEqual (takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual (takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);