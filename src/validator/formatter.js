const trim = function () {
  const title = "    Parihari       ";
  console.log("Before Trimming: " + title);
  const afterTrimming = title.trim();
  console.log("After Trimming:" + afterTrimming);
};

const changeToLowerCase = function(){
    const name = "Pratiksha";
    const afterLowerCase = name.toLowerCase();
    console.log("After converting to lower case: " , afterLowerCase);
    
}
const changeToUpperCase = function(){
    const name = "Pratiksha";
    const afterUpperCase = name.toUpperCase();
    console.log("After converting to upper case: " , afterUpperCase);
    
}

module.exports.trim = trim;
module.exports.changeToLowerCase = changeToLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;
