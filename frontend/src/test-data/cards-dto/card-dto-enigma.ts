import { CardPrintingDto } from '../../app/modules/search-cards/dto/card-printing.dto';
import { CardDto } from '../../app/modules/search-cards/dto/card.dto';

const cardPrintingDtoEnigmaNoFoil: CardPrintingDto = {
  artists: ['Asur Misoa'],
  identifier: 'MST026',
  image: 'MST026',
  print: 'MST026',
  set: 'Part The Mistveil',
};

const cardPrintingDtoEnigmaColdFoil: CardPrintingDto = {
  artists: ['Asur Misoa'],
  foiling: 'C',
  identifier: 'MST026',
  image: 'MST026_V2',
  print: 'MST026-Cold',
  set: 'Part The Mistveil',
};

const cardPrintingDtoEnigmaMarvel: CardPrintingDto = {
  artists: ['Asur Misoa'],
  foiling: 'C',
  identifier: 'MST026',
  image: 'MST026_BACK',
  print: 'MST026-Cold-Full Art-Back',
  set: 'Part The Mistveil',
  treatment: 'FA',
};

const cardPrintingDtoEnigmaRainbowFoil: CardPrintingDto = {
  artists: ['Asur Misoa'],
  foiling: 'R',
  identifier: 'ENG001',
  image: 'ENG001',
  print: 'ENG001-Rainbow',
  set: 'Enigma Blitz Deck',
};

const cardDtoEnigma: CardDto = {
  artists: ['Asur Misoa'],
  classes: ['Illusionist'],
  printings: [cardPrintingDtoEnigmaNoFoil, cardPrintingDtoEnigmaColdFoil, cardPrintingDtoEnigmaMarvel, cardPrintingDtoEnigmaRainbowFoil],
  setIdentifiers: ['ENG001', 'MST026'],
  sets: ['Enigma Blitz Deck', 'Part The Mistveil'],
  cardIdentifier: 'enigma',
  defaultImage: 'MST026',
  name: 'Enigma',
  rarity: 'Token',
  typeText: 'Mystic Illusionist Hero - Young',
};

export {
  cardDtoEnigma,
  cardPrintingDtoEnigmaNoFoil,
  cardPrintingDtoEnigmaColdFoil,
  cardPrintingDtoEnigmaMarvel,
  cardPrintingDtoEnigmaRainbowFoil,
};
