import { BaseEntity } from '../base.entity';
import { ICardPrinting } from '../card-printings/card-printing.interface';
import { ICard } from './card.interface';

export class Card extends BaseEntity implements ICard {
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
