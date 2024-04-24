import greeting from '../cli.js';
import mainLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
const isPrime = (count) => {
  for (let i = 2; i <= Math.sqrt(count); i += 1) {
    if (count % i === 0) {
      return false;
    }
  }
  return true;
};

const generateExpression = () => {
  const question = getRandomNumber(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};
const playPrime = () => {
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = generateExpression();
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playPrime;
