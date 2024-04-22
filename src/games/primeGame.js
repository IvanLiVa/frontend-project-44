import gretting from '../cli.js';
import mainLogicGame from '../index.js';

const isPrime = (count) => {
  if (count <= 1) {
    return 'no';
  }
  // Если делитель существует, мы можем найти его в диапазоне от 2 до sqrt(n).
  for (let i = 2; i <= Math.sqrt(count); i += 1) {
    if (count % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const findPrime = () => {
  const userName = gretting();
  const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(ruleGame);
  let i = 0;
  while (i < 3) {
    const question = Math.floor(Math.random() * 100);
    const rightAnswer = isPrime(question);
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (isCorrect) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default findPrime;

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
