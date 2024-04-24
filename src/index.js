import readlineSync from 'readline-sync';

export const mainLogicGame = (question, rightAnswer, userName) => {
  const userAnswer = readlineSync.question(`Question: ${question}`);
  console.log(`Your answer: ${userAnswer}`);
  if (String(userAnswer) === String(rightAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const playGame = (generateExpression, userName) => {
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = generateExpression();
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
