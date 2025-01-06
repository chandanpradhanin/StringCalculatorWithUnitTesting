import {add} from './src/utils/CommonFunctions';

describe('CalculatorCases', () => {
  test('Returns 0 if the string is empty', () => {
    expect(add('')).toBe(0);
  });

  test('Returns the number itself if the input is a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('Should be able to handle an indefinite number of numbers.', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  test('Should be able to support various separators', () => {
    expect(add(';\n1;2')).toBe(3);
    expect(add('#\n2#3#4')).toBe(9);
  });

  test('Should throw an exception if a negative number is encountered.', () => {
    expect(() => add('-2')).toThrow('Invalid numbers -2');
  });
});
