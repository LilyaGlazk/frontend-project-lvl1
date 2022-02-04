import randomNumber from '../randomNumber.js';
import { engine, rounds } from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const task = randomNumber(1, 100);
  const getCorrectAnswer = (number) => (number % 2 === 0);
  const correctAnswer = getCorrectAnswer(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const brainEven = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  engine(rulesOfTheGame, gameRounds);
};

export default brainEven;
