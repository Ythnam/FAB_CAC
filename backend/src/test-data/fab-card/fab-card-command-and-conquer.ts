import { Class, Card as FABCard, Printing as FABPrinting, Foiling, Rarity, Release, ReleaseEdition, Treatment } from '@flesh-and-blood/types';

const artists = {
  fajarekaSetiawan: 'Fajareka Setiawan',
  josephQiu: 'Joseph Qiu',
  othonNikolaidis: 'Othon Nikolaidis',
};

const fabCardPrintingCacFableColdFoil: FABPrinting = {
  artists: [artists.othonNikolaidis],
  foiling: Foiling.C,
  identifier: 'DYN000',
  image: 'DYN000',
  print: 'DYN000-Cold-Alternate Art-Extended Art',
  set: Release.Dynasty,
  treatment: Treatment.AA,
};

const fabCardPrintingCacHP1NonFoil: FABPrinting = {
  artists: [artists.fajarekaSetiawan],
  identifier: '1HP360',
  image: '1HP360',
  print: '1HP360',
  set: Release.HistoryPack1,
};

const fabCardPrintingCacArcaneRisingFirstNonFoil: FABPrinting = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.First,
  identifier: 'ARC159',
  image: 'ARC159',
  print: 'ARC159',
  set: Release.ArcaneRising,
};

const fabCardPrintingCacArcaneRisingFirstRainbowFoil: FABPrinting = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.First,
  foiling: Foiling.R,
  identifier: 'ARC159',
  image: 'ARC159',
  print: 'ARC159-First-Rainbow',
  set: Release.ArcaneRising,
};

const fabCardPrintingCacArcaneRisingUnlimitedNonFoil: FABPrinting = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.Unlimited,
  identifier: 'ARC159',
  image: 'U-ARC159',
  print: 'ARC159-Unlimited',
  set: Release.ArcaneRising,
};

const fabCardPrintingCacArcaneRisingUnlimitedRainbowFoil: FABPrinting = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.Unlimited,
  foiling: Foiling.R,
  identifier: 'ARC159',
  image: 'U-ARC159',
  print: 'ARC159-Unlimited-Rainbow',
  set: Release.ArcaneRising,
};

const fabCardPrintingCacPromoRainbowFoil: FABPrinting = {
  artists: [artists.josephQiu],
  foiling: Foiling.R,
  identifier: 'FAB278',
  image: 'FAB278',
  print: 'FAB278-Rainbow-Alternate Art',
  set: Release.Promos,
  treatment: Treatment.AA,
};

const fabCardCommandAndConquer: FABCard = {
  artists: Object.values(artists),
  classes: [Class.Generic],
  printings: [
    fabCardPrintingCacFableColdFoil,
    fabCardPrintingCacHP1NonFoil,
    fabCardPrintingCacArcaneRisingFirstNonFoil,
    fabCardPrintingCacArcaneRisingFirstRainbowFoil,
    fabCardPrintingCacArcaneRisingUnlimitedNonFoil,
    fabCardPrintingCacArcaneRisingUnlimitedRainbowFoil,
    fabCardPrintingCacPromoRainbowFoil,
  ],
  setIdentifiers: ['1HP360', 'ARC159', 'DYN000', 'FAB278'],
  sets: [Release.ArcaneRising, Release.Dynasty, Release.HistoryPack1, Release.Promos],
  cardIdentifier: 'command-and-conquer-red',
  defaultImage: 'U-ARC159',
  name: 'Command and Conquer',
  rarity: Rarity.Majestic,
  typeText: 'Generic Action - Attack',
  legalFormats: [],
  legalHeroes: [],
  rarities: [],
  subtypes: [],
  types: [],
};

export {
  fabCardCommandAndConquer,
  fabCardPrintingCacFableColdFoil,
  fabCardPrintingCacHP1NonFoil,
  fabCardPrintingCacArcaneRisingFirstNonFoil,
  fabCardPrintingCacArcaneRisingFirstRainbowFoil,
  fabCardPrintingCacArcaneRisingUnlimitedNonFoil,
  fabCardPrintingCacArcaneRisingUnlimitedRainbowFoil,
  fabCardPrintingCacPromoRainbowFoil,
};
