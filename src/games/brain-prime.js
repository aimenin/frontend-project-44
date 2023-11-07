import {
  BOTTOM_RANDOM_BORDER,
  TOP_RANDOM_BORDER,
  askQuestion,
  constructQuestions,
  getRandomNumber,
  showCorrect,
  showQuestion,
  showWrongAnswer,
} from '../index.js';

const answers = ['yes', 'no'];

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

const constructQuestion = () => {
  const question = getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);

  return {
    question,
    answer: isPrime(question),
  };
};

const primeGame = () => {
  showQuestion('Answer "yes" if given number is prime. Otherwise answer "no"');

  const questions = constructQuestions(constructQuestion);

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const answer = askQuestion(question.question);

    if ((isPrime(question.question) && answer !== 'yes') || (!isPrime(question.question) && answer !== 'no')) {
      showWrongAnswer(answer, answers[Number(answers[0] === answer)]);
      return false;
    }
    showCorrect();
  }

  return true;
};

export default primeGame;
