/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const rounds = 3;

export const engine = (rulesOfTheGame, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfTheGame);
  for (let counter = 0; counter < rounds; counter += 1) {
    const [task, correctAnswer] = generateRound[counter];
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === `${correctAnswer}`) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
