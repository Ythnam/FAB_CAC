import { BaseEntity } from '../base.entity';
import { ICardPrinting } from './card-printing.interface';

export class CardPrinting extends BaseEntity implements ICardPrinting {
  artists: string[];
  edition?: string;
  foiling?: string;
  identifier: string;
  image?: string;
  oppositeImage?: string;
  print: string;
  set: string;
  treatment?: string;
}
