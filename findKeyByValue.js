const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const findKeyByValue = function (o ,v) {
    //collect all the keys from the object o using Object.keys function
    const keysOfO = Object.keys(o);
    //loop through each key, and if they match the value, then return the key
    for (const each_key of keysOfO) {
        if (o[each_key] === v){
            return (each_key);
        }
    }
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    horror: "IT 2"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "IT 2"),"horror");