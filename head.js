// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(array1) {
    //console.log(array1[0]);
    return(array1[0]);
};

//console.log(head(process.argv[2]));

//Question: how can I call this from terminal WITH ARGUMENTS? node head.js [1,2,3,4]?
module.exports = head;