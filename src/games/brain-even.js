import {
  askQuestion,
  answers,
  getRandomNumber,
  BOTTOM_RANDOM_BORDER,
  TOP_RANDOM_BORDER,
  constructQuestions,
  showCorrect,
  showWrongAnswer,
  showQuestion,
} from '../index.js';

const isEven = (number) => number % 2 === 0;

const ask = (question) => {
  const answer = askQuestion(question);

  if (
    (isEven(question) && answer === 'yes') || (!isEven(question) && answer === 'no')
  ) {
    showCorrect();
    return true;
  }

  showWrongAnswer(answer, answers[Number(answers[0] === answer)]);
  return false;
};

const constructQuestion = () => getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);

const evenGame = () => {
  showQuestion('Answer "yes" if the number is even, otherwise answer "no".');
  const questions = constructQuestions(constructQuestion);
  for (let i = 0; i < questions.length; i += 1) {
    if (!ask(questions[i])) {
      return false;
    }
  }
  return true;
};

export default evenGame;
