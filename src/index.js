import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => {
  const random = Math.random();

  const scaled = random * (max - min + 1);

  const result = Math.floor(scaled + min);

  return result;
};

export const constructQuestions = () => {
  const questions = Array.from({ length: 3 });

  return questions;
};

export const game = (gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (!gameFunction()) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}`);
};