import randomNumber from '../randomNumber.js';
import { engine, roundsCount } from '../index.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const rounds = () => {
  const number = randomNumber(1, 100);
  const task = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const gamePrime = () => {
  const gameRounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameRounds.push(rounds());
  }
  engine(rulesOfTheGame, gameRounds);
};

export default gamePrime;
