// A greet to the advisor
function advisor(Savanna = "Savanna Sullivan") {
  console.log("You are my best coach advisor " + Savanna + "!");
}
advisor();

// A function is listing the core skills
function skillCore(
  core1 = "Client Relations",
  core2 = "Medical Coding",
  core3 = "Financial Management",
  core4 = "Marketing Strategy",
  core5 = "Microsoft Office Suite",
  core6 = "Data Analytics"
  ) {
    console.log(`The social skill maintain ${core1} for products and services.`);
    console.log(`Manage an develop the ${core2} institution.`);
    console.log(`The ${core3} was tailored a plan to help customers reduce amount due.`);
    console.log(`Developing a unified brand voice and message that is ${core4}.`);
    console.log(`Conducted in-depth support the ${core5} to clear objectives and promotional.`);
    console.log(`Integers market to provide support comprehensive for ${core6}.`);
  }
skillCore();  

// An object is storing these skills  
function getObj() {
  return {
    ExpSkill1: "Client Relations",
    ExpSkill2: "Medical Coding",
    ExpSkill3: "Financial Management",
    ExpSkill4: "Marketing Strategy",
    ExpSkill5: "Microsoft Office Suite",
    ExpSkill6: "Data Analytics"
  };
}
console.log(getObj());

// Scope refers to where variables can be accessed
const company = "Office";

const logMonitorDesktop = () => {
  let activity = "the Workplace";
  return "We create projects at " + activity + " to focus objectives at the " + company;
};
  console.log(logMonitorDesktop())
  
console.log("Savanna Sullivan - Advisor Career Coach");
