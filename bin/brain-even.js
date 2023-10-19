#!/usr/bin/env node
import readlineSync from 'readline-sync';

const answers = ['yes', 'no'];

// util functions
const isEven = (number) => number % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 101);

const constructQuestions = () => {
  const questions = Array.from([1, 2, 3], () => getRandomNumber());

  return questions;
};

const ask = (question) => {
  const answer = answers[readlineSync.keyInSelect(answers, `Question: ${question}`)];

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

const startGame = () => {
  const questions = constructQuestions();

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < questions.length; i += 1) {
    if (!ask(questions[i])) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

startGame();
