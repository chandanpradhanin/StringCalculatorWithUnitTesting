import {add} from './src/utils/CommonFunctions';

describe('CalculatorCases', () => {
  test('Returns 0 if the string is empty', () => {
    expect(add('')).toBe(0);
  });

  test('Returns the number itself if the input is a single number', () => {
    expect(add('1')).toBe(1);
  });
});
