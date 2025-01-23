import { CardPrintingDto } from './card-printing.dto';

export interface CardDto {
  artists: string[];
  cardIdentifier: string;
  classes: string[];
  defaultImage?: string;
  name: string;
  printings: CardPrintingDto[];
  rarity: string;
  setIdentifiers: string[];
  sets: string[];
  typeText: string;
}
