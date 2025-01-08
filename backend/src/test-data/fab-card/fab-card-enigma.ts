import { Class, Card as FABCard, Printing as FABPrinting, Foiling, Rarity, Release, Treatment } from '@flesh-and-blood/types';

const enigmaPrint: FABPrinting = {
  artists: ['Asur Misoa'],
  identifier: 'MST026',
  image: 'MST026',
  print: 'MST026',
  set: Release.PartTheMistveil,
};

const enigmaPrintCf: FABPrinting = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C,
  identifier: 'MST026',
  image: 'MST026_V2',
  print: 'MST026-Cold',
  set: Release.PartTheMistveil,
};

const enighmaPrintMarvel: FABPrinting = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C,
  identifier: 'MST026',
  image: 'MST026_BACK',
  print: 'MST026-Cold-Full Art-Back',
  set: Release.PartTheMistveil,
  treatment: Treatment.FA,
};

const enigmaPrintRf: FABPrinting = {
  artists: ['Asur Misoa'],
  foiling: Foiling.R,
  identifier: 'ENG001',
  image: 'ENG001',
  print: 'ENG001-Rainbow',
  set: Release.EnigmaBlitzDeck,
};

export const fabCardEnigma: FABCard = {
  artists: ['Asur Misoa'],
  classes: [Class.Illusionist],
  printings: [enigmaPrint, enigmaPrintCf, enighmaPrintMarvel, enigmaPrintRf],
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
