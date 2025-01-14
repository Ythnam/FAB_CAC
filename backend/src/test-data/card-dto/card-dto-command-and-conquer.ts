import { Class, Foiling, Rarity, Release, ReleaseEdition, Treatment } from '@flesh-and-blood/types';
import { CardDto } from '@/gateway/controllers/cards/dto/card.dto';
import { CardPrintingDto } from '@/gateway/controllers/cards/dto/card-printing.dto';

const artists = {
  fajarekaSetiawan: 'Fajareka Setiawan',
  josephQiu: 'Joseph Qiu',
  othonNikolaidis: 'Othon Nikolaidis',
};

const cardPrintingDtoCacFableColdFoil: CardPrintingDto = {
  artists: [artists.othonNikolaidis],
  foiling: Foiling.C.toString(),
  identifier: 'DYN000',
  image: 'DYN000',
  print: 'DYN000-Cold-Alternate Art-Extended Art',
  set: Release.Dynasty.toString(),
  treatment: Treatment.AA.toString(),
};

const cardPrintingDtoCacHP1NonFoil: CardPrintingDto = {
  artists: [artists.fajarekaSetiawan],
  identifier: '1HP360',
  image: '1HP360',
  print: '1HP360',
  set: Release.HistoryPack1.toString(),
};

const cardPrintingDtoCacArcaneRisingFirstNonFoil: CardPrintingDto = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.First.toString(),
  identifier: 'ARC159',
  image: 'ARC159',
  print: 'ARC159',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingDtoCacArcaneRisingFirstRainbowFoil: CardPrintingDto = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.First.toString(),
  foiling: Foiling.R.toString(),
  identifier: 'ARC159',
  image: 'ARC159',
  print: 'ARC159-First-Rainbow',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingDtoCacArcaneRisingUnlimitedNonFoil: CardPrintingDto = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.Unlimited.toString(),
  identifier: 'ARC159',
  image: 'U-ARC159',
  print: 'ARC159-Unlimited',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingDtoCacArcaneRisingUnlimitedRainbowFoil: CardPrintingDto = {
  artists: [artists.fajarekaSetiawan],
  edition: ReleaseEdition.Unlimited.toString(),
  foiling: Foiling.R.toString(),
  identifier: 'ARC159',
  image: 'U-ARC159',
  print: 'ARC159-Unlimited-Rainbow',
  set: Release.ArcaneRising.toString(),
};

const cardPrintingDtoCacPromoRainbowFoil: CardPrintingDto = {
  artists: [artists.josephQiu],
  foiling: Foiling.R.toString(),
  identifier: 'FAB278',
  image: 'FAB278',
  print: 'FAB278-Rainbow-Alternate Art',
  set: Release.Promos.toString(),
  treatment: Treatment.AA.toString(),
};

const cardDtoCommandAndConquer: CardDto = {
  artists: Object.values(artists),
  classes: [Class.Generic.toString()],
  printings: [
    cardPrintingDtoCacFableColdFoil,
    cardPrintingDtoCacHP1NonFoil,
    cardPrintingDtoCacArcaneRisingFirstNonFoil,
    cardPrintingDtoCacArcaneRisingFirstRainbowFoil,
    cardPrintingDtoCacArcaneRisingUnlimitedNonFoil,
    cardPrintingDtoCacArcaneRisingUnlimitedRainbowFoil,
    cardPrintingDtoCacPromoRainbowFoil,
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
  cardDtoCommandAndConquer,
  cardPrintingDtoCacFableColdFoil,
  cardPrintingDtoCacHP1NonFoil,
  cardPrintingDtoCacArcaneRisingFirstNonFoil,
  cardPrintingDtoCacArcaneRisingFirstRainbowFoil,
  cardPrintingDtoCacArcaneRisingUnlimitedNonFoil,
  cardPrintingDtoCacArcaneRisingUnlimitedRainbowFoil,
  cardPrintingDtoCacPromoRainbowFoil,
};
