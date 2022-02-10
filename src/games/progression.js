import randomNumber from '../randomNumber.js';
import { engine, roundsCount } from '../index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const generateProgression = () => {
  const progression = [];
  const firstNumber = randomNumber(0, 1000);
  const stepOfTheProgression = randomNumber(1, 10);
  for (let i = 0; i <= 10; i += 1) {
    progression.push(firstNumber + i * stepOfTheProgression);
  }
  return progression;
};

const generateRound = () => {
  const indexOfHiddenNumber = randomNumber(1, 10);
  const progression = generateProgression();
  const correctAnswer = progression[indexOfHiddenNumber];
  progression[indexOfHiddenNumber] = '..';
  const task = progression.join(' ');
  return [task, correctAnswer];
};

const gameProgression = () => {
  const gameRounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameRounds.push(generateRound());
  }
  engine(rulesOfTheGame, gameRounds);
};

export default gameProgression;
