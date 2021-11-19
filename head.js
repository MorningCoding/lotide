// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const head = function(array1) {
    //console.log(array1[0]);
    return(array1[0]);
};

head([1,2,3,4]);

//Question: how can I call this from terminal WITH ARGUMENTS? node head.js [1,2,3,4]?

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");