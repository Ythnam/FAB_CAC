import { CardsService } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;
  let apiServiceMock;

  beforeEach(() => {
    apiServiceMock = {
      get: jest.fn(),
    };
    service = new CardsService(apiServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllCardsByName', () => {
    it('should call apiService with enigma input', () => {
      // Arrange
      const name = 'Enigma';
      jest.spyOn(apiServiceMock, 'get');

      // Act
      service.getAllCardsByName(name);

      // Assert
      const expectedUrl = 'cards';
      const expectedParameter = {
        name,
      };
      expect(apiServiceMock.get).toHaveBeenCalledTimes(1);
      expect(apiServiceMock.get).toHaveBeenCalledWith(expectedUrl, expectedParameter);
    });
  });
});
