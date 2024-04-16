import readlineSync from 'readline-sync';

const mainLogicGame = (question, rightAnswer, userName) => {
  const userAnswer = readlineSync.question(`Question: ${question}`);
  console.log(`Your answer: ${userAnswer}`);
  if (String(userAnswer) === String(rightAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${userName}`);
  return false;
};

export default mainLogicGame;
