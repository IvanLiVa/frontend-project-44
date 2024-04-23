import greeting from '../cli.js';
import mainLogicGame from '../index.js';

const isEven = (count) => {
  if (count % 2 === 0) {
    return 'yes';
  }
  if (count % 2 !== 0) {
    return 'no';
  }
  return undefined;
};

const askNumberQuestions = () => {
  const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const question = Math.floor(Math.random() * 100);
    const rightAnswer = isEven(question);
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (isCorrect) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default askNumberQuestions;
