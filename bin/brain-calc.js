#!/usr/bin/env node
import readlineSync from 'readline-sync';
import safeEval from 'safe-eval';

import { constructQuestions, game, getRandomNumber } from '../src/index.js';

const emptyQuestions = constructQuestions();

const equationSigns = ['+', '-', '*'];

const constructQuestion = () => {
  const firstOperand = getRandomNumber(0, 100);
  const equationSign = equationSigns[getRandomNumber(0, 2)];
  const secondOperand = getRandomNumber(0, 100);
  return [firstOperand, equationSign, secondOperand];
};

const fillQuestions = () => emptyQuestions.map(() => constructQuestion());

const constructQuestionString = (question) => `${question[0]} ${question[1]} ${question[2]} `;

const askQuestion = (question) => readlineSync.question(`Question ${constructQuestionString(question)}`);

const calcGame = () => {
  console.log('What is the result of the expression?');
  const questions = fillQuestions();

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const answer = askQuestion(question);
    const rightAnswer = safeEval(constructQuestionString(question));
    console.log(`Question ${constructQuestionString(question)}`);
    console.log(`Your answer: ${answer}`);
    if (Number(answer) !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }
    console.log('Correct!');
  }

  return true;
};

game(calcGame);
