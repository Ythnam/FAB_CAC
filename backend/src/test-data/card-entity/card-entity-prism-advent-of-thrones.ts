import { Class, Foiling, Rarity, Release } from '@flesh-and-blood/types';
import { CardPrintingEntity } from '@/infrastructure/dataset/entities/card-printing.entity';
import { CardEntity } from '@/infrastructure/dataset/entities/card.entity';

const prismPrint: CardPrintingEntity = {
  artists: ['Livia Prima'],
  identifier: 'DTD002',
  image: 'DTD002',
  print: 'DTD002',
  set: Release.DuskTillDawn.toString(),
};

const prismPrintCf: CardPrintingEntity = {
  artists: ['Livia Prima'],
  foiling: Foiling.C.toString(),
  identifier: 'HER084',
  image: 'HER084',
  print: 'HER084-Cold',
  set: Release.Promos.toString(),
};

export const entityCardPrism: CardEntity = {
  artists: ['Livia Prima'],
  classes: [Class.Illusionist.toString()],
  printings: [prismPrint, prismPrintCf],
  setIdentifiers: ['DTD002', 'HER084'],
  sets: [Release.DuskTillDawn.toString(), Release.Promos.toString()],
  cardIdentifier: 'prism-advent-of-thrones',
  defaultImage: 'DTD002',
  name: 'Prism, Advent of Thrones',
  rarity: Rarity.Majestic,
  typeText: 'Light Illusionist Hero - Young',
};
