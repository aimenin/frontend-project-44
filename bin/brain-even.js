#!/usr/bin/env node
import {
  answers, askYesNoQuesion, constructQuestions, game, getRandomNumber,
} from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const ask = (question) => {
  const answer = askYesNoQuesion(question);

  if (
    (isEven(question) && answer === 'yes') || (!isEven(question) && answer === 'no')
  ) {
    console.log('Correct!');
    return true;
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${answers[Number(answers[0] === answer)]}'.`,
  );
  return false;
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const questions = constructQuestions(() => getRandomNumber(0, 100));
  for (let i = 0; i < questions.length; i += 1) {
    if (!ask(questions[i])) {
      return false;
    }
  }
  return true;
};

game(evenGame);
