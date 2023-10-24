#!/usr/bin/env node
import {
  BOTTOM_RANDOM_BORDER,
  TOP_RANDOM_BORDER,
  askQuestion, constructQuestions, game, getRandomNumber,
} from '../src/index.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const constructQuestion = () => {
  const firstOperand = getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);
  const secondOperand = getRandomNumber(BOTTOM_RANDOM_BORDER, TOP_RANDOM_BORDER);
  const answer = findGCD(firstOperand, secondOperand);
  return {
    firstOperand,
    secondOperand,
    answer,
  };
};

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const questions = constructQuestions(constructQuestion);

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const answer = askQuestion(`${question.firstOperand} ${question.secondOperand}`);

    if (Number(answer) !== questions[i].answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questions[i].answer}.`);
      return false;
    }
    console.log('Correct!');
  }

  return true;
};

game(brainGcd);
