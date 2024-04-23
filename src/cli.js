import readlineSync from 'readline-sync';

const greeting = (ruleGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleGame);
  return userName;
};

export default greeting;
