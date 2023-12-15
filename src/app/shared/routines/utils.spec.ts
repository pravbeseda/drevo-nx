import { assertIsDefined } from './utils';

describe('assertIsDefined function', () => {
  it('should not throw an error if value is defined', () => {
    const value: string = 'test';
    expect(() => assertIsDefined(value, 'Test')).not.toThrow();
  });

  it('should throw an error if value is undefined', () => {
    const value: string | undefined = undefined;
    expect(() => assertIsDefined(value, 'Test')).toThrow(
      "Expected 'Test' to be defined, but received undefined"
    );
  });

  it('should throw an error if value is null', () => {
    const value: string | null = null;
    expect(() => assertIsDefined(value, 'Test')).toThrow(
      "Expected 'Test' to be defined, but received null"
    );
  });
});
