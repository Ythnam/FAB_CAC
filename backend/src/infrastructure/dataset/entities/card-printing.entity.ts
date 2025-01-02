import { ICardPrinting } from '@/domain/entities/card-printings/card-printing.interface';

export class CardPrintingEntity implements ICardPrinting {
  artists: string[];
  edition?: string;
  foiling?: string;
  setIdentifier: string;
  image?: string;
  oppositeImage?: string;
  print: string;
  set: string;
  treatment: string;
}
