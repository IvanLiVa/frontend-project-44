import mainLogicGame from '../index.js';
import greeting from '../cli.js';

const creatProgression = () => {
  // random array length for arrayResult
  const lengthResult = Math.floor(Math.random() * (9 - 4 + 1)) + 4;
  // random commonDifference for arrayResult
  const comDifference = Math.floor(Math.random() * lengthResult) + 1; // мин > 0
  // first count in progression
  let firstCount = Math.floor(Math.random() * 100);
  const arrResult = [];
  for (let i = 0; i < lengthResult; i += 1) {
    arrResult[i] = firstCount;
    firstCount += comDifference;
  }
  return arrResult;
};

const findNumProg = () => {
  const userName = greeting('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const progression = creatProgression();
    const hideCountIndex = Math.floor(Math.random() * (progression.length - 1));
    const rightAnswer = progression[hideCountIndex];
    progression[hideCountIndex] = '..'; // replace
    const question = progression.join(' '); // 1 2 .. 3 4
    const isCorrect = mainLogicGame(question, rightAnswer, userName);
    if (isCorrect) {
      i += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default findNumProg;
