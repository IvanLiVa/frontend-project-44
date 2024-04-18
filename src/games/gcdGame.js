import reduce from 'lodash/reduce.js'; // это  было долго  )
import mainLogicGame from '../index.js';
import gretting from '../cli.js';

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

const findGcd = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let k = 0; k < arr1.length; k += 1) {
      if (arr1[i] === arr2[k]) {
        result.push(arr1[i]);
        i += 1;
      }
    }
  }
  if (result.length === 0) {
    return 1;
  }
  return reduce(result, (acc, rec) => acc * rec);
};

const gcd = () => {
  const userName = gretting();
  const ruleGame = 'Find the greatest common divisor of given numbers.';
  console.log(ruleGame);
  let i = 0;
  while (i < 3) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const arr1 = findFactor(number1);
    const arr2 = findFactor(number2);
    const question = `${number1}  ${number2}`;
    const rightAnswer = findGcd(arr1, arr2);
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
