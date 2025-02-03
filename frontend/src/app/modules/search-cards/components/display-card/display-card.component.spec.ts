import { cardEntityEnigma } from '../../../../../test-data/cards-entity/card-entity-enigma';
import { CardEntity } from '../../models/entities/card.entity';
import { DisplayCardComponent } from './display-card.component';

const baseUrl = 'https://test/cards';

describe('DisplayCardComponent', () => {
  let component: DisplayCardComponent;

  beforeEach(() => {
    component = new DisplayCardComponent();
    component.card = cardEntityEnigma;
    component.baseUrl = baseUrl;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hasMultiplePrinting', () => {
    it('should be truthy', () => {
      // Act
      const result = component.hasMultiplePrinting;

      // Assert
      expect(result).toBeTruthy();
    });

    it('should be falsy', () => {
      // Arrange
      component.card = new CardEntity();

      // Act
      const result = component.hasMultiplePrinting;

      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe('imageUrl', () => {
    it('should be default image', () => {
      // Arrange
      const card = new CardEntity();
      card.defaultImage = 'defaultImage';
      component.card = card;

      // Act
      const result = component.imageUrl;

      // Assert
      const expectedResult = `${baseUrl}/defaultImage.webp`;
      expect(result).toBe(expectedResult);
    });

    it('should be third printing image', () => {
      // Arrange
      component.currentIndex = 2;

      // Act
      const result = component.imageUrl;

      // Assert
      const expectedResult = `${baseUrl}/MST026_BACK.webp`;
      expect(result).toBe(expectedResult);
    });
  });

  describe('nextImage', () => {
    it('should change index from 2 to 3', () => {
      // Arrange
      component.currentIndex = 2;

      // Act
      component.nextImage();

      // Assert
      expect(component.currentIndex).toBe(3);
    });

    it('should change index from 3 to 0', () => {
      // Arrange
      component.currentIndex = 3;

      // Act
      component.nextImage();

      // Assert
      expect(component.currentIndex).toBe(0);
    });
  });

  describe('previousImage', () => {
    it('should change index from 2 to 1', () => {
      // Arrange
      component.currentIndex = 2;

      // Act
      component.previousImage();

      // Assert
      expect(component.currentIndex).toBe(1);
    });

    it('should change index from 0 to 3', () => {
      // Act
      component.previousImage();

      // Assert
      expect(component.currentIndex).toBe(3);
    });
  });
});
