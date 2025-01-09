import { fabCardEnigma } from '@/test-data/fab-card/fab-card-enigma';
import { CardEntityMapper } from './card-entity-mapper';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';

describe('CardEntityMapper', () => {
  it('toCardEntity', () => {
    // Act
    const result = CardEntityMapper.toCardEntity(fabCardEnigma);

    // Arrange
    expect(result).toMatchObject(cardEntityEnigma);
  });
});
