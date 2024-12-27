import { ICard } from '@/domain/entities/cards/card.interface';

export class CardEntity implements ICard {
  cardIdentifier: string;
  classes: string[];
  name: string;
  rarity: string;
  artists: string[];
  edition: string;
  foiling: string;
  setIdentifier: string;
  image: string;
  set: string;
  treatment: string;
}
