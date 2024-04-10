import readlineSync from "readline-sync";

const gretting = () => {
  var userName = readlineSync.question("May I have your name?");
  console.log(`Hello, ${userName} !`);
};

export default gretting;
