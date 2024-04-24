import greeting from '../cli.js';
import { playGame } from '../index.js';
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

const generatePrimeExpression = () => {
  const primeQuestion = getRandomNumber(2, 100);
  const rightAnswer = isPrime(primeQuestion) ? 'yes' : 'no';
  return { question: primeQuestion, rightAnswer };
};

const playPrime = () => {
  playGame(generatePrimeExpression, userName);
};

export default playPrime;
