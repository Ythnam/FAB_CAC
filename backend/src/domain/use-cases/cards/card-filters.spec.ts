import { CardFilters } from './card-filters';

describe('CardFilters', () => {
  it('should be defined', () => {
    const cardFilter = new CardFilters();
    expect(cardFilter).toBeDefined();
  });

  it.each`
    input
    ${null}
    ${undefined}
    ${''}
    ${' '}
  `('should set * when input is $input', ({ input }) => {
    // Arrange
    const cardFilter = new CardFilters(input);
    const expected = '*';
    expect(cardFilter.name).toBe(expected);
  });
});
