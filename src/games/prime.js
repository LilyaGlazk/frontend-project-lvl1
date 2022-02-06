import randomNumber from '../randomNumber.js';
import { engine, rounds } from '../index.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const number = randomNumber(1, 100);
  const task = `${number}`;
  const correctAnswer = isPrime(number);
  return [task, correctAnswer];
};

const primeGame = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  engine(rulesOfTheGame, gameRounds);
};

export default primeGame;
