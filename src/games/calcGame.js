import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'What is the result of the expression?';
const calcExpression = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operator');
  }
};

const generateExpression = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  return {
    question: `${number1} ${randomOperator} ${number2}`,
    rightAnswer: calcExpression(randomOperator, number1, number2),
  };
};

const playCalcGame = () => {
  playGame(generateExpression, ruleGame);
};

export default playCalcGame;
