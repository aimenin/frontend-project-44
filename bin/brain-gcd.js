#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { constructQuestions, game, getRandomNumber } from '../src/index.js';

const emptyQuestions = constructQuestions();

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const fillQuestions = (questionToFill) => {
  const questions = questionToFill.map(() => {
    const firstOperand = getRandomNumber(0, 100);
    const secondOperand = getRandomNumber(0, 100);
    const answer = findGCD(firstOperand, secondOperand);
    return {
      firstOperand,
      secondOperand,
      answer,
    };
  });
  return questions;
};

const askQuestion = (question) => readlineSync.question(`Question: ${question.firstOperand} ${question.secondOperand} `);

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const questions = fillQuestions(emptyQuestions);

  for (let i = 0; i < questions.length; i += 1) {
    const answer = askQuestion(questions[i]);

    if (Number(answer) !== questions[i].answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questions[i].answer}.`);
      return false;
    }
    console.log('Correct!');
  }

  return true;
};

game(brainGcd);
