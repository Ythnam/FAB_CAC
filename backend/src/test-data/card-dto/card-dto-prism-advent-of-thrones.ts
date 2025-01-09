import { Class, Foiling, Rarity, Release } from '@flesh-and-blood/types';
import { CardDto } from '@/gateway/controllers/cards/dto/card.dto';
import { CardPrintingDto } from '@/gateway/controllers/cards/dto/card-printing.dto';

const cardPrintingDtoPrismNoFoil: CardPrintingDto = {
  artists: ['Livia Prima'],
  identifier: 'DTD002',
  image: 'DTD002',
  print: 'DTD002',
  set: Release.DuskTillDawn.toString(),
};

const cardPrintingDtoPrismColdFoil: CardPrintingDto = {
  artists: ['Livia Prima'],
  foiling: Foiling.C.toString(),
  identifier: 'HER084',
  image: 'HER084',
  print: 'HER084-Cold',
  set: Release.Promos.toString(),
};

const cardDtoPrism: CardDto = {
  artists: ['Livia Prima'],
  classes: [Class.Illusionist.toString()],
  printings: [cardPrintingDtoPrismNoFoil, cardPrintingDtoPrismColdFoil],
  setIdentifiers: ['DTD002', 'HER084'],
  sets: [Release.DuskTillDawn.toString(), Release.Promos.toString()],
  cardIdentifier: 'prism-advent-of-thrones',
  defaultImage: 'DTD002',
  name: 'Prism, Advent of Thrones',
  rarity: Rarity.Majestic,
  typeText: 'Light Illusionist Hero - Young',
};

export { cardDtoPrism, cardPrintingDtoPrismNoFoil, cardPrintingDtoPrismColdFoil };
