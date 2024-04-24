import { playGame } from '../index.js';
import greeting from '../cli.js';
import getRandomNumber from '../randomNumber.js';

const userName = greeting('Find the greatest common divisor of given numbers.');

const findFactor = (n) => {
  const multiplier = [];
  let divider = 2;
  let number = n;
  while (number >= 2) {
    if (number % divider === 0) {
      number /= divider;
      multiplier.push(divider);
    } else {
      divider += 1;
    }
  }
  return multiplier;
};

const findCommonArray = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
};

const findRightAnswer = (arr) => {
  if (arr.length === 0) {
    return 1;
  }
  return arr.reduce((acc, rec) => acc * rec, 1);
};

const generateExpression = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const arr1 = findFactor(number1);
  const arr2 = findFactor(number2);
  const question = `${number1} ${number2}`;
  const commonArray = findCommonArray(arr1, arr2);
  const rightAnswer = findRightAnswer(commonArray);
  return { question, rightAnswer };
};

const playGcd = () => {
  playGame(generateExpression, userName);
};

export default playGcd;
