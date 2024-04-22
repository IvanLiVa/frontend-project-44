import mainLogicGame from '../index.js';
import gretting from '../cli.js';

const userName = gretting();
const ruleGame = 'What is the result of the expression?';
console.log(ruleGame);

const calc = () => {
  let i = 0;
  while (i < 3) {
    const numberOfIndex = Math.floor(Math.random() * 3);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[numberOfIndex];
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const question = `${number1} ${randomOperator} ${number2}`;
    let rightAnswer;
    switch (randomOperator) {
      case '+':
        rightAnswer = number1 + number2;
        break;
      case '-':
        rightAnswer = number1 - number2;
        break;
      case '*':
        rightAnswer = number1 * number2;
        break;
      default:
        console.error('Unknown operator');
    }
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (isCorrect) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default calc;
