import { CardPrintingEntity } from '../../app/modules/search-cards/models/entities/card-printing.entity';
import { CardEntity } from '../../app/modules/search-cards/models/entities/card.entity';

const cardPrintingEntityEnigmaNoFoil: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  identifier: 'MST026',
  image: 'MST026',
  print: 'MST026',
  set: 'Part The Mistveil',
};

const cardPrintingEntityEnigmaColdFoil: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: 'C',
  identifier: 'MST026',
  image: 'MST026_V2',
  print: 'MST026-Cold',
  set: 'Part The Mistveil',
};

const cardPrintingEntityEnigmaMarvel: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: 'C',
  identifier: 'MST026',
  image: 'MST026_BACK',
  print: 'MST026-Cold-Full Art-Back',
  set: 'Part The Mistveil',
  treatment: 'FA',
};

const cardPrintingEntityEnigmaRainbowFoil: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: 'R',
  identifier: 'ENG001',
  image: 'ENG001',
  print: 'ENG001-Rainbow',
  set: 'Enigma Blitz Deck',
};

const cardEntityEnigma: CardEntity = {
  artists: ['Asur Misoa'],
  classes: ['Illusionist'],
  printings: [
    cardPrintingEntityEnigmaNoFoil,
    cardPrintingEntityEnigmaColdFoil,
    cardPrintingEntityEnigmaMarvel,
    cardPrintingEntityEnigmaRainbowFoil,
  ],
  setIdentifiers: ['ENG001', 'MST026'],
  sets: ['Enigma Blitz Deck', 'Part The Mistveil'],
  cardIdentifier: 'enigma',
  defaultImage: 'MST026',
  name: 'Enigma',
  rarity: 'Token',
  typeText: 'Mystic Illusionist Hero - Young',
};

export {
  cardEntityEnigma,
  cardPrintingEntityEnigmaNoFoil,
  cardPrintingEntityEnigmaColdFoil,
  cardPrintingEntityEnigmaMarvel,
  cardPrintingEntityEnigmaRainbowFoil,
};
