export class CardPrintingDto {
  readonly artists: string[];
  readonly edition?: string;
  readonly foiling?: string;
  readonly identifier: string;
  readonly image?: string;
  readonly oppositeImage?: string;
  readonly print: string;
  readonly set: string;
  readonly treatment?: string;
}
