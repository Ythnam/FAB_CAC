import { StringHelper } from './string-helper';

describe('StringHelper', () => {
  describe('isStringEmpty', () => {
    it.each`
      input         | expectedResult
      ${null}       | ${true}
      ${undefined}  | ${true}
      ${''}         | ${true}
      ${' '}        | ${true}
      ${'        '} | ${true}
      ${'test'}     | ${false}
    `('should return $expectedResult when input is $input', ({ input, expectedResult }) => {
      // Act
      const result = StringHelper.isStringEmpty(input);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});
