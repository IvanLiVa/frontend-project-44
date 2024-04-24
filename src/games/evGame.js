import greeting from '../cli.js';
import { playGame } from '../index.js';
import getRandomNumber from '../randomNumber.js';

const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (count) => count % 2 === 0;
const generateExpression = () => {
  const question = getRandomNumber(0, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const playEvGame = () => {
  playGame(generateExpression, userName);
};

export default playEvGame;
