import randomNumber from '../randomNumber.js';
import { engine, rounds } from '../index.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const findGratestDivisor = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGratestDivisor(number2, number1 % number2);
};

const generateRound = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const task = `${number1} ${number2}`;
  const correctAnswer = findGratestDivisor(number1, number2);
  return [task, correctAnswer];
};

const gcd = () => {
  const gameRounds = [];
  for (let i = 0; i < rounds; i += 1) {
    gameRounds.push(generateRound());
  }
  engine(rulesOfTheGame, gameRounds);
};

export default gcd;
