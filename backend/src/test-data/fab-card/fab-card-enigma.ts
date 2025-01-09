import { Class, Card as FABCard, Printing as FABPrinting, Foiling, Rarity, Release, Treatment } from '@flesh-and-blood/types';

const fabCardPrintEnigmaNoFoil: FABPrinting = {
  artists: ['Asur Misoa'],
  identifier: 'MST026',
  image: 'MST026',
  print: 'MST026',
  set: Release.PartTheMistveil,
};

const fabCardPrintEnigmaColdFoil: FABPrinting = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C,
  identifier: 'MST026',
  image: 'MST026_V2',
  print: 'MST026-Cold',
  set: Release.PartTheMistveil,
};

const fabCardPrintEnigmaMarvel: FABPrinting = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C,
  identifier: 'MST026',
  image: 'MST026_BACK',
  print: 'MST026-Cold-Full Art-Back',
  set: Release.PartTheMistveil,
  treatment: Treatment.FA,
};

const fabCardPrintEnigmaRainbowFoil: FABPrinting = {
  artists: ['Asur Misoa'],
  foiling: Foiling.R,
  identifier: 'ENG001',
  image: 'ENG001',
  print: 'ENG001-Rainbow',
  set: Release.EnigmaBlitzDeck,
};

const fabCardEnigma: FABCard = {
  artists: ['Asur Misoa'],
  classes: [Class.Illusionist],
  printings: [fabCardPrintEnigmaNoFoil, fabCardPrintEnigmaColdFoil, fabCardPrintEnigmaMarvel, fabCardPrintEnigmaRainbowFoil],
  setIdentifiers: ['ENG001', 'MST026'],
  sets: [Release.EnigmaBlitzDeck, Release.PartTheMistveil],
  cardIdentifier: 'enigma',
  defaultImage: 'MST026',
  name: 'Enigma',
  rarity: Rarity.Token,
  typeText: 'Mystic Illusionist Hero - Young',
  legalFormats: [],
  legalHeroes: [],
  rarities: [],
  subtypes: [],
  types: [],
};

export { fabCardEnigma, fabCardPrintEnigmaNoFoil, fabCardPrintEnigmaColdFoil, fabCardPrintEnigmaMarvel, fabCardPrintEnigmaRainbowFoil };
