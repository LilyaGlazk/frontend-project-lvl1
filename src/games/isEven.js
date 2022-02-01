import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);
const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(rulesOfTheGame);

const rounds = 3;

const brainEven = () => {
  for (let counter = 0; counter < rounds; counter += 1) {
    const getCorrectAnswer = (number) => (number % 2 === 0);
    const task = randomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(task) ? 'yes' : 'no';
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

export default brainEven;
