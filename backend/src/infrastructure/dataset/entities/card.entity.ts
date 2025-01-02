import { ICardPrinting } from '@/domain/entities/card-printings/card-printing.interface';
import { ICard } from '@/domain/entities/cards/card.interface';

export class CardEntity implements ICard {
  artists: string[] = [];
  cardIdentifier: string;
  classes: string[] = [];
  defaultImage?: string;
  name: string;
  printings: ICardPrinting[] = [];
  rarity: string;
  setIdentifiers: string[] = [];
  sets: string[] = [];
  typeText: string;
}
