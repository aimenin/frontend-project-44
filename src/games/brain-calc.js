import safeEval from 'safe-eval';

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

const equationSigns = ['+', '-', '*'];

const constructQuestion = () => {
  const firstOperand = getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);
  const equationSign = equationSigns[getRandomNumber(0, equationSigns.length - 1)];
  const secondOperand = getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);
  return [firstOperand, equationSign, secondOperand];
};

const constructQuestionString = (question) => `${question[0]} ${question[1]} ${question[2]} `;

const calcGame = () => {
  showQuestion('What is the result of the expression?');
  const questions = constructQuestions(constructQuestion);

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const questionString = constructQuestionString(question);
    const answer = askQuestion(questionString);
    const rightAnswer = safeEval(questionString);
    if (Number(answer) !== rightAnswer) {
      showWrongAnswer(answer, rightAnswer);
      return false;
    }
    showCorrect();
  }

  return true;
};

export default calcGame;
