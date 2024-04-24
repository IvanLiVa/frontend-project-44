import mainLogicGame from '../index.js';
import greeting from '../cli.js';

const userName = greeting('What is the result of the expression?');
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
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  return {
    question: `${number1} ${randomOperator} ${number2}`,
    rightAnswer: calcExpression(randomOperator, number1, number2),
  };
};

const playCalcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = generateExpression();
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (!isCorrect) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playCalcGame;
