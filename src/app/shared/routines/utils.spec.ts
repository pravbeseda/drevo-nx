import { assertIsDefined } from './utils';

describe('assertIsDefined function', () => {
  it('should not throw an error if value is defined', () => {
    const value: string = 'test';
    expect(() => assertIsDefined(value, 'Test')).not.toThrow();
  });

  [null, undefined].forEach((value) => {
    it(`should throw an error if value is ${value}`, () => {
      expect(() => assertIsDefined(value, 'Test')).toThrow(
        `Expected 'Test' to be defined, but received ${value}`
      );
    });
  });
});
