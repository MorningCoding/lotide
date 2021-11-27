const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const findKey = function(object1, callback) {
    //1. takes in an object and a callback
    //2. scan the object
    //3. return the first key for which callback returns truthy value
    //4. no key found? return undefined

    //scan the object
    for (let i in object1) {
        //if value such as {stars:2} matches, then it'll be true
        if (callback(object1[i])) {
            //then return the key
            return i;
        }
    }
};

assertEqual((findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma") // => "noma"