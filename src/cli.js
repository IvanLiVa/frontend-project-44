import readlineSync from 'readline-sync';

const gretting = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName} !`);
  return userName;
};

export default gretting;
