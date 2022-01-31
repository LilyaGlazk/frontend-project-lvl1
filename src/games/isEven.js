import randomNumber from '../randomNumber.js';
import readlineSync from 'readline-sync';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0);
const rounds = 3;
const generateRound = () => {
  const task = randomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};
console.log(rulesOfTheGame);
const brainEven = () => {
for (let counter = 0; counter < rounds; counter += 1) {
  console.log(`Question: ${task}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === `${correctAnswer}`) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
    return console.log(`Let's try again, ${userName}!`);
  }
}
return console.log(`Congratulations, ${userName}!`);
}



export default brainEven;