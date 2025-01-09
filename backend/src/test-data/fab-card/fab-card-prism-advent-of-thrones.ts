import { Class, Card as FABCard, Printing as FABPrinting, Foiling, Rarity, Release } from '@flesh-and-blood/types';

const fabCardPrintPrismNoFoil: FABPrinting = {
  artists: ['Livia Prima'],
  identifier: 'DTD002',
  image: 'DTD002',
  print: 'DTD002',
  set: Release.DuskTillDawn,
};

const fabCardPrintPrismColdFoil: FABPrinting = {
  artists: ['Livia Prima'],
  foiling: Foiling.C,
  identifier: 'HER084',
  image: 'HER084',
  print: 'HER084-Cold',
  set: Release.Promos,
};

const fabCardPrism: FABCard = {
  artists: ['Livia Prima'],
  classes: [Class.Illusionist],
  printings: [fabCardPrintPrismNoFoil, fabCardPrintPrismColdFoil],
  setIdentifiers: ['DTD002', 'HER084'],
  sets: [Release.DuskTillDawn, Release.Promos],
  cardIdentifier: 'prism-advent-of-thrones',
  defaultImage: 'DTD002',
  name: 'Prism, Advent of Thrones',
  rarity: Rarity.Majestic,
  typeText: 'Light Illusionist Hero - Young',
  legalFormats: [],
  legalHeroes: [],
  rarities: [],
  subtypes: [],
  types: [],
};

export { fabCardPrism, fabCardPrintPrismNoFoil, fabCardPrintPrismColdFoil };
