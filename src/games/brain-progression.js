import {
  askQuestion,
  constructQuestions,
  getRandomNumber,
  showCorrect,
  showQuestion,
  showWrongAnswer,
} from '../index.js';

const BOTTOM_RANDOW_LENGTH = 5;
const TOP_RANDOM_LENGTH = 10;
const BOTTOM_RANDOM_DEFFERENCE = 5;
const TOP_RANDOM_DEFFERENCE = 20;

const generateArithmeticSequence = (length, commonDifference) => {
  const sequence = [];

  const hiddenIndex = getRandomNumber(0, length - 1);

  let hiddenNumber = 0;

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      hiddenNumber = i * commonDifference + 1;
      sequence.push('..');
    } else {
      sequence.push(i * commonDifference + 1);
    }
  }

  return { sequence: sequence.join(' '), hiddenNumber };
};

const constructQuestion = () => {
  const length = getRandomNumber(BOTTOM_RANDOW_LENGTH, TOP_RANDOM_LENGTH);
  const commonDifference = getRandomNumber(BOTTOM_RANDOM_DEFFERENCE, TOP_RANDOM_DEFFERENCE);
  return generateArithmeticSequence(length, commonDifference);
};

const progressionGame = () => {
  showQuestion('What number is missing in the progression?');
  const questions = constructQuestions(constructQuestion);

  for (let i = 0; i < questions.length; i += 1) {
    const answer = askQuestion(questions[i].sequence);

    const rightAnswer = questions[i].hiddenNumber;

    if (Number(answer) !== rightAnswer) {
      showWrongAnswer(answer, rightAnswer);
      return false;
    }
    showCorrect();
  }

  return true;
};

export default progressionGame;
