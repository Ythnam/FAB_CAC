import { Class, Foiling, Rarity, Release, ReleaseEdition, Treatment } from '@flesh-and-blood/types';
import { CardPrintingEntity } from '@/infrastructure/dataset/entities/card-printing.entity';
import { CardEntity } from '@/infrastructure/dataset/entities/card.entity';

const artists = {
  fajarekaSetiawan: 'Fajareka Setiawan',
  josephQiu: 'Joseph Qiu',
  othonNikolaidis: 'Othon Nikolaidis',
};

const cardPrintingEntityCacFableColdFoil: CardPrintingEntity = {
  artists: [artists.othonNikolaidis],
  foiling: Foiling.C.toString(),
  identifier: 'DYN000',
  image: 'DYN000',
  print: 'DYN000-Cold-Alternate Art-Extended Art',
  set: Release.Dynasty.toString(),
  treatment: Treatment.AA.toString(),
};

const cardPrintingEntityCacHP1NonFoil: CardPrintingEntity = {
  artists: [artists.fajarekaSetiawan],
  identifier: '1HP360',
  image: '1HP360',
  print: '1HP360',
  set: Release.HistoryPack1.toString(),
};

const cardPrintingEntityCacArcaneRisingFirstNonFoil: CardPrintingEntity = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.First.toString(),
  identifier: 'ARC159',
  image: 'ARC159',
  print: 'ARC159',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingEntityCacArcaneRisingFirstRainbowFoil: CardPrintingEntity = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.First.toString(),
  foiling: Foiling.R.toString(),
  identifier: 'ARC159',
  image: 'ARC159',
  print: 'ARC159-First-Rainbow',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingEntityCacArcaneRisingUnlimitedNonFoil: CardPrintingEntity = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.Unlimited.toString(),
  identifier: 'ARC159',
  image: 'U-ARC159',
  print: 'ARC159-Unlimited',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingEntityCacArcaneRisingUnlimitedRainbowFoil: CardPrintingEntity = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.Unlimited.toString(),
  foiling: Foiling.R.toString(),
  identifier: 'ARC159',
  image: 'U-ARC159',
  print: 'ARC159-Unlimited-Rainbow',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingEntityCacPromoRainbowFoil: CardPrintingEntity = {
  artists: [artists.josephQiu],
  foiling: Foiling.R.toString(),
  identifier: 'FAB278',
  image: 'FAB278',
  print: 'FAB278-Rainbow-Alternate Art',
  set: Release.Promos.toString(),
  treatment: Treatment.AA.toString(),
};

const cardEntityCommandAndConquer: CardEntity = {
  artists: Object.values(artists),
  classes: [Class.Generic.toString()],
  printings: [
    cardPrintingEntityCacFableColdFoil,
    cardPrintingEntityCacHP1NonFoil,
    cardPrintingEntityCacArcaneRisingFirstNonFoil,
    cardPrintingEntityCacArcaneRisingFirstRainbowFoil,
    cardPrintingEntityCacArcaneRisingUnlimitedNonFoil,
    cardPrintingEntityCacArcaneRisingUnlimitedRainbowFoil,
    cardPrintingEntityCacPromoRainbowFoil,
  ],
  setIdentifiers: ['1HP360', 'ARC159', 'DYN000', 'FAB278'],
  sets: [Release.ArcaneRising.toString(), Release.Dynasty.toString(), Release.HistoryPack1.toString(), Release.Promos.toString()],
  cardIdentifier: 'command-and-conquer-red',
  defaultImage: 'U-ARC159',
  name: 'Command and Conquer',
  rarity: Rarity.Majestic.toString(),
  typeText: 'Generic Action - Attack',
};

export {
  cardEntityCommandAndConquer,
  cardPrintingEntityCacFableColdFoil,
  cardPrintingEntityCacHP1NonFoil,
  cardPrintingEntityCacArcaneRisingFirstNonFoil,
  cardPrintingEntityCacArcaneRisingFirstRainbowFoil,
  cardPrintingEntityCacArcaneRisingUnlimitedNonFoil,
  cardPrintingEntityCacArcaneRisingUnlimitedRainbowFoil,
  cardPrintingEntityCacPromoRainbowFoil,
};
