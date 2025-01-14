import { Class, Foiling, Rarity, Release, Treatment } from '@flesh-and-blood/types';
import { CardPrintingEntity } from '@/infrastructure/dataset/entities/card-printing.entity';
import { CardEntity } from '@/infrastructure/dataset/entities/card.entity';

const cardPrintingEntityEnigmaNoFoil: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  identifier: 'MST026',
  image: 'MST026',
  print: 'MST026',
  set: Release.PartTheMistveil.toString(),
};

const cardPrintingEntityEnigmaColdFoil: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C.toString(),
  identifier: 'MST026',
  image: 'MST026_V2',
  print: 'MST026-Cold',
  set: Release.PartTheMistveil.toString(),
};

const cardPrintingEntityEnigmaMarvel: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C.toString(),
  identifier: 'MST026',
  image: 'MST026_BACK',
  print: 'MST026-Cold-Full Art-Back',
  set: Release.PartTheMistveil,
  treatment: Treatment.FA.toString(),
};

const cardPrintingEntityEnigmaRainbowFoil: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: Foiling.R.toString(),
  identifier: 'ENG001',
  image: 'ENG001',
  print: 'ENG001-Rainbow',
  set: Release.EnigmaBlitzDeck.toString(),
};

const cardEntityEnigma: CardEntity = {
  artists: ['Asur Misoa'],
  classes: [Class.Illusionist.toString()],
  printings: [cardPrintingEntityEnigmaNoFoil, cardPrintingEntityEnigmaColdFoil, cardPrintingEntityEnigmaMarvel, cardPrintingEntityEnigmaRainbowFoil],
  setIdentifiers: ['ENG001', 'MST026'],
  sets: [Release.EnigmaBlitzDeck.toString(), Release.PartTheMistveil.toString()],
  cardIdentifier: 'enigma',
  defaultImage: 'MST026',
  name: 'Enigma',
  rarity: Rarity.Token,
  typeText: 'Mystic Illusionist Hero - Young',
};

export {
  cardEntityEnigma,
  cardPrintingEntityEnigmaNoFoil,
  cardPrintingEntityEnigmaColdFoil,
  cardPrintingEntityEnigmaMarvel,
  cardPrintingEntityEnigmaRainbowFoil,
};
