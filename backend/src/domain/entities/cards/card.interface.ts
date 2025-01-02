import { ICardPrinting } from '../card-printings/card-printing.interface';

export interface ICard {
  artists: string[];
  cardIdentifier: string;
  classes: string[];
  defaultImage?: string;
  name: string;
  printings: ICardPrinting[];
  rarity: string;
  setIdentifiers: string[];
  sets: string[];
  typeText: string;
}
