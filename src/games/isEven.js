import randomNumber from '../randomNumber.js';
import { engine, roundsCount } from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const rounds = () => {
  const task = randomNumber(1, 100);
  const isEven = (number) => (number % 2 === 0);
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const gameEven = () => {
  const gameRounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameRounds.push(rounds());
  }
  engine(rulesOfTheGame, gameRounds);
};

export default gameEven;
