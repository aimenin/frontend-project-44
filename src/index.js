import readlineSync from 'readline-sync';

export const BOTTOM_RANDOM_BORDER = 0;
export const TOP_RANDOM_BORDER = 100;

export const getRandomNumber = (min, max) => {
  const random = Math.random();

  const scaled = random * (max - min + 1);

  const result = Math.floor(scaled + min);

  return result;
};

export const constructQuestions = (mapFunction) => {
  const questions = Array.from({ length: 3 }, mapFunction);

  return questions;
};

export const askQuestion = (question) => readlineSync.question(`Question: ${question}`);

export const answers = ['yes', 'no'];

export const askYesNoQuesion = (question) => answers[readlineSync.keyInSelect(answers, `Question: ${question}`)];

export const showCorrect = () => console.log('Correct!');

export const showWrongAnswer = (answer, rightAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);

export const showQuestion = (question) => console.log(question);

export const game = (gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (gameFunction === undefined) return;
  if (!gameFunction()) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
};
