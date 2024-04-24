import greeting from '../cli.js';
import mainLogicGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (count) => count % 2 === 0;
const generateExpression = () => {
  const question = getRandomNumber(0, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const playEvGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = generateExpression();
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playEvGame;
