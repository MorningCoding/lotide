

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

const middle = function (array) {
    if (array.length == 1){
        return ([]);
    }
    else if (array.length == 0){
        return ([]);
    }
    else if (array.length % 2 == 0){ //even
        //console.log("hi")
        return [array[(array.length/2)], array[(array.length/2)-1]];
    }
    else {
        return [(array[Math.floor(array.length/2)])];
    }

}

console.log(middle([1,2,3,4]));
// IP can host multiple applications