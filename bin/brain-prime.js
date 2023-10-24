#!/usr/bin/env node
import {
  askYesNoQuesion, constructQuestions, game, getRandomNumber,
} from '../src/index.js';

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
  const question = getRandomNumber(0, 100);

  return {
    question,
    answer: isPrime(question),
  };
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  const questions = constructQuestions(constructQuestion);

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const answer = askYesNoQuesion(question.question);

    if ((isPrime(question.question) && answer !== 'yes') || (!isPrime(question.question) && answer !== 'no')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answers[Number(answers[0] === answer)]}'.`);
      return false;
    }
    console.log('Correct!');
  }

  return true;
};

game(primeGame);
