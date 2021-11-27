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

const words = ["ground", "control", "to", "major", "tom"];
//so we will call the map function
//map function takes in an array and a callback function
//within the map function, we loop through the array
//print out the first item of the array
//apply the callback function to the item in the array
//Basically, we passed a second callback function into the map function
// and we used that second callback function within the map function itself
// this second callback function is passed in as an argument


const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[2]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);
assertArraysEqual(map(words, word => word[1]),['r','o','o','a','o']);
assertArraysEqual(map(words, word => word[2]),['o','n',undefined,'j','m']);