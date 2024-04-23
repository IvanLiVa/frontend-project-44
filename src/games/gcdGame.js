import mainLogicGame from '../index.js';
import greeting from '../cli.js';

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

const finCommonArray = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let k = 0; k < arr1.length; k += 1) {
      if (arr1[i] === arr2[k]) {
        result.push(arr1[i]);
        i += 1;
      }
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

const gcd = () => {
  const userName = greeting('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const arr1 = findFactor(number1);
    const arr2 = findFactor(number2);
    const question = `${number1}  ${number2}`;
    const commonArray = finCommonArray(arr1, arr2);
    const rightAnswer = findRightAnswer(commonArray);
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (isCorrect) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default gcd;
