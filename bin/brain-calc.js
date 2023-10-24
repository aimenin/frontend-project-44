#!/usr/bin/env node
import safeEval from 'safe-eval';

import {
  BOTTOM_RANDOM_BORDER,
  TOP_RANDOM_BORDER,
  askQuestion, constructQuestions, game, getRandomNumber,
} from '../src/index.js';

const equationSigns = ['+', '-', '*'];

const constructQuestion = () => {
  const firstOperand = getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);
  const equationSign = equationSigns[getRandomNumber(0, equationSigns.length - 1)];
  const secondOperand = getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);
  return [firstOperand, equationSign, secondOperand];
};

const constructQuestionString = (question) => `${question[0]} ${question[1]} ${question[2]} `;

const calcGame = () => {
  console.log('What is the result of the expression?');
  const questions = constructQuestions(constructQuestion);

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const questionString = constructQuestionString(question);
    const answer = askQuestion(questionString);
    const rightAnswer = safeEval(questionString);
    if (Number(answer) !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }
    console.log('Correct!');
  }

  return true;
};

game(calcGame);
