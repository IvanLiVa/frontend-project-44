import readlineSync from 'readline-sync';

const isEven = (count) => count % 2 === 0;

const askNumberQuestions = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const count = Math.floor((Math.random() + i) * 100);
    const answer = readlineSync.question(`Question: ${count}`);
    console.log(`Your answer: ${answer}`);
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(.`);
      return;
    }
    if (isEven(count) && answer.toLowerCase() === 'yes') {
      console.log('Correct !');
      i += 1;
    }
    if (!isEven(count) && answer.toLowerCase() === 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName} !`);
      return;
    }
    if (!isEven(count) && answer.toLowerCase() === 'no') {
      console.log('Correct !');
      i += 1;
    }
    if (!isEven(count) && answer.toLowerCase() === 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName} !`);
      return;
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default askNumberQuestions;
