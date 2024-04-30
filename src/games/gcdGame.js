import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => {
  let a = Math.abs(x);
  let b = Math.abs(y);
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  while (b !== 0) {
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
  return a || b;
};

const generateExpression = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const rightAnswer = gcd(number1, number2);
  return { question, rightAnswer };
};

const playGcd = () => {
  playGame(generateExpression, ruleGame);
};

export default playGcd;
