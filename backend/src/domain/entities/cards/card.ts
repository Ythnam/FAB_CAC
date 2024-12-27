import { BaseEntity } from '../base.entity';
import { ICard } from './card.interface';

export class Card extends BaseEntity implements ICard {
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
