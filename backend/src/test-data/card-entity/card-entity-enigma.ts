import { CardPrintingEntity } from '@/infrastructure/dataset/entities/card-printing.entity';
import { CardEntity } from '@/infrastructure/dataset/entities/card.entity';
import { Class, Foiling, Rarity, Release, Treatment } from '@flesh-and-blood/types';

const enigmaPrint: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  identifier: 'MST026',
  image: 'MST026',
  print: 'MST026',
  set: Release.PartTheMistveil.toString(),
};

const enigmaPrintCf: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C.toString(),
  identifier: 'MST026',
  image: 'MST026_V2',
  print: 'MST026-Cold',
  set: Release.PartTheMistveil.toString(),
};

const enigmaPrintMarvel: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: Foiling.C.toString(),
  identifier: 'MST026',
  image: 'MST026_BACK',
  print: 'MST026-Cold-Full Art-Back',
  set: Release.PartTheMistveil,
  treatment: Treatment.FA.toString(),
};

const enigmaPrintRf: CardPrintingEntity = {
  artists: ['Asur Misoa'],
  foiling: Foiling.R.toString(),
  identifier: 'ENG001',
  image: 'ENG001',
  print: 'ENG001-Rainbow',
  set: Release.EnigmaBlitzDeck.toString(),
};

const entityCardEnigma: CardEntity = {
  artists: ['Asur Misoa'],
  classes: [Class.Illusionist.toString()],
  printings: [enigmaPrint, enigmaPrintCf, enigmaPrintMarvel, enigmaPrintRf],
  setIdentifiers: ['ENG001', 'MST026'],
  sets: [Release.EnigmaBlitzDeck.toString(), Release.PartTheMistveil.toString()],
  cardIdentifier: 'enigma',
  defaultImage: 'MST026',
  name: 'Enigma',
  rarity: Rarity.Token,
  typeText: 'Mystic Illusionist Hero - Young',
};

export { entityCardEnigma, enigmaPrint, enigmaPrintCf, enigmaPrintMarvel, enigmaPrintRf };
