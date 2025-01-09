import { Class, Foiling, Rarity, Release, Treatment } from '@flesh-and-blood/types';
import { CardDto } from '@/gateway/controllers/cards/dto/card.dto';
import { CardPrintingDto } from '@/gateway/controllers/cards/dto/card-printing.dto';

const cardPrintingDtoEnigmaNoFoil: CardPrintingDto = {
  artists: ['Asur Misoa'],
  identifier: 'MST026',
  image: 'MST026',
  print: 'MST026',
  set: Release.PartTheMistveil.toString(),
};

const cardPrintingDtoEnigmaColdFoil: CardPrintingDto = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C.toString(),
  identifier: 'MST026',
  image: 'MST026_V2',
  print: 'MST026-Cold',
  set: Release.PartTheMistveil.toString(),
};

const cardPrintingDtoEnigmaMarvel: CardPrintingDto = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C.toString(),
  identifier: 'MST026',
  image: 'MST026_BACK',
  print: 'MST026-Cold-Full Art-Back',
  set: Release.PartTheMistveil,
  treatment: Treatment.FA.toString(),
};

const cardPrintingDtoEnigmaRainbowFoil: CardPrintingDto = {
  artists: ['Asur Misoa'],
  foiling: Foiling.R.toString(),
  identifier: 'ENG001',
  image: 'ENG001',
  print: 'ENG001-Rainbow',
  set: Release.EnigmaBlitzDeck.toString(),
};

const cardDtoEnigma: CardDto = {
  artists: ['Asur Misoa'],
  classes: [Class.Illusionist.toString()],
  printings: [cardPrintingDtoEnigmaNoFoil, cardPrintingDtoEnigmaColdFoil, cardPrintingDtoEnigmaMarvel, cardPrintingDtoEnigmaRainbowFoil],
  setIdentifiers: ['ENG001', 'MST026'],
  sets: [Release.EnigmaBlitzDeck.toString(), Release.PartTheMistveil.toString()],
  cardIdentifier: 'enigma',
  defaultImage: 'MST026',
  name: 'Enigma',
  rarity: Rarity.Token,
  typeText: 'Mystic Illusionist Hero - Young',
};

export { cardDtoEnigma, cardPrintingDtoEnigmaNoFoil, cardPrintingDtoEnigmaColdFoil, cardPrintingDtoEnigmaMarvel, cardPrintingDtoEnigmaRainbowFoil };
