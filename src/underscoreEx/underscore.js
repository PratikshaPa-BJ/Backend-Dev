const underscore = require("underscore");
const getFirstElem = function(){
    let arr = [ 5, 4, 6, 7, 2, 1 ];
      let firstElement = underscore.first(arr);
      console.log("The first element in an this array is: " + firstElement);
      
}
// flatten() is an inbuilt function in the underscore js library that is used to flatten an array that is nested to some level..
const flattenArray = function(){
    let arr = [ 1,[2], [3, [[4]]] ];
    let afterFlatten = underscore.flatten(arr);
    let flattenwithDepth = underscore.flatten(arr, 2);
    console.log("After flatten the final array is: " , afterFlatten );
    console.log("After flatten with depth the array is: ", flattenwithDepth) ;
    
    
}

module.exports.getFirstElem = getFirstElem;
module.exports.flattenArray = flattenArray;