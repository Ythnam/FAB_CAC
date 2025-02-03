import { CardPrintingEntity } from './card-printing.entity';

export class CardEntity {
  artists: string[] = [];
  cardIdentifier: string;
  classes: string[];
  defaultImage?: string;
  name: string;
  printings: CardPrintingEntity[] = [];
  rarity: string;
  setIdentifiers: string[] = [];
  sets: string[] = [];
  typeText: string;
}
