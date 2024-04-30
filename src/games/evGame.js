import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateExpression = () => {
  const question = getRandomNumber();
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, rightAnswer };
};

const playEvGame = () => {
  playGame(generateExpression, ruleGame);
};

export default playEvGame;
