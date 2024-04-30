import readlineSync from 'readline-sync';

const playGame = (generateExpression, ruleGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleGame);
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = generateExpression();
    const userAnswer = readlineSync.question(`Question: ${question}`);
    console.log(`Your answer: ${userAnswer}`);
    if (String(userAnswer) === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
