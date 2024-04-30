import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'What number is missing in the progression?';

const creatProgression = () => {
  const lengthResult = getRandomNumber(4, 9);
  const comDifference = getRandomNumber(1, lengthResult);
  let firstCount = getRandomNumber(1, 99);
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
  playGame(generateExpression, ruleGame);
};

export default playProgression;
