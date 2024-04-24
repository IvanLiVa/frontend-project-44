import mainLogicGame from '../index.js';
import greeting from '../cli.js';
import getRandomNumber from '../randomNumber.js';

const userName = greeting('What number is missing in the progression?');

const creatProgression = () => {
  const lengthResult = getRandomNumber(4, 9);
  const comDifference = getRandomNumber(1, lengthResult);
  let firstCount = getRandomNumber();
  const arrResult = [];
  for (let i = 0; i < lengthResult; i += 1) {
    arrResult[i] = firstCount;
    firstCount += comDifference;
  }
  return arrResult;
};

const generateExpression = () => {
  const progression = creatProgression();
  const hideCountIndex = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[hideCountIndex];
  progression[hideCountIndex] = '..';
  const question = progression.join(' ');
  return { question, rightAnswer };
};

const playProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = generateExpression();
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playProgression;
