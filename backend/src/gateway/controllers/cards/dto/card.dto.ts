import { CardPrintingDto } from './card-printing.dto';

export class CardDto {
  readonly artists: string[];
  readonly cardIdentifier: string;
  readonly classes: string[];
  readonly defaultImage: string;
  readonly name: string;
  readonly printings: CardPrintingDto[];
  readonly rarity: string;
  readonly setIdentifiers: string[];
  readonly sets: string[];
  readonly typeText: string;
}
