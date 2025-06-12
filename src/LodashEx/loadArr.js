// Lodash is a library
const loadash = require("lodash");

// Chunk is an array method which is available in lodash library, is used to split an array into smaller chunks of a specified size,,
// if array can split evenly then chunks will equal in size, if can't split evenly ,then final chunk will be the remaining elements....
const chunkMethod = function () {
  const arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const afterChunking = loadash.chunk(arr, 4);
  console.log("After Using Chunk: ", afterChunking);
};

// Tail method in lodash library , is used to return the tail of an array means it returns new array with all elements except first one..
const tailMethod = function () {
  const arr = [10, 20, 30, 40, 60, 80, 50, 90];
  const afterUsingTail = loadash.tail(arr);
  console.log("After using Tail: ", afterUsingTail);
};
// Union method in lodash is used to create a new array containing all unique elements from one or more input arrays..It basically combines all array into single one and remove all the duplicate elements..
const unionMethod = function () {
  const arr1 = [3, 4, 3, 2];
  const arr2 = [5, 7, 4, 5, 4, 6];
  const arr3 = [6, 9, 2, 9, 5, 3, 1];
  const afterUsingUnion = loadash.union(arr1, arr2, arr3);
  console.log("After using Union : ", afterUsingUnion);
};
// fromPairs function in lodash is used to create an object from an array of key-value pair
const fromPairsMethod = function () {
  const arr = [
    ["Horror", "The Conjuring"],
    ["Thrilling", "Interceptor"],
    ["Drama", "The Life List"],
    ["Romantic", "Fifty Shades Of Grey"],
  ];
  const afterUsingFrompairs = loadash.fromPairs(arr);
  console.log("After using fromPairs Mathod: ", afterUsingFrompairs);
};

module.exports.chunkMethod = chunkMethod;
module.exports.tailMethod = tailMethod;
module.exports.unionMethod = unionMethod;
module.exports.fromPairsMethod = fromPairsMethod;
