import randomNumber from '../randomNumber.js';
import { engine, roundsCount } from '../index.js';

export const rulesOfTheGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateRound = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const randomOperator = operators[randomNumber(0, operators.length - 1)];
  const operator = randomOperator;
  const task = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator);
  return [task, correctAnswer];
};

const gameCalc = () => {
  const gameRounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameRounds.push(generateRound());
  }
  engine(rulesOfTheGame, gameRounds);
};

export default gameCalc;
