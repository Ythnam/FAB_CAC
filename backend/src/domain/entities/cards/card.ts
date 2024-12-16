import { BaseEntity } from '../base.entity';
import { ICard } from './card.interface';

export class Card extends BaseEntity implements ICard {
  id: number;
  // TODO
}
