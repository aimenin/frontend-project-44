#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { constructQuestions, game, getRandomNumber } from '../src/index.js';

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

  return { sequence, hiddenNumber };
};

const constructQuestion = () => {
  const length = getRandomNumber(5, 10);
  const commonDifference = getRandomNumber(5, 20);
  return generateArithmeticSequence(length, commonDifference);
};

const askQuestion = (question) => readlineSync.question(`Question: ${question.sequence} `);

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  const questions = constructQuestions(constructQuestion);

  for (let i = 0; i < questions.length; i += 1) {
    const answer = askQuestion(questions[i]);

    const rightAnswer = questions[i].hiddenNumber;

    if (Number(answer) !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }
    console.log('Correct!');
  }

  return true;
};

game(progressionGame);
