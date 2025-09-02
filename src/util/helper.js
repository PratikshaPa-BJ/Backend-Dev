const date = new Date();

const printDate = function () {
  console.log("Today's Date is: ", date.toLocaleDateString());
};

const printMonth = function () {
  const currentMonth = date.toLocaleString("default", { month: "long" });
  console.log("Current Month is: ", currentMonth);
};
const getPersonalInfo = function () {
  const name = "Pratiksha";
  const mission = "Backend Developer";
  const preferLearningMedium = "Self Learner";
  console.log(
    "My name is ",
    name,
    "I want to be a ",
    mission,
    ", ",
    "And I am a ",
    preferLearningMedium
  );
};

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getPersonalInfo = getPersonalInfo;
