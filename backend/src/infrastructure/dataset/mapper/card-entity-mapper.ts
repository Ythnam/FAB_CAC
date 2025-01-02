import { Card as FabCard, Printing } from '@flesh-and-blood/types';

import { ICard } from '@/domain/entities/cards/card.interface';
import { CardEntity } from '../entities/card.entity';
import { CardPrintingEntity } from '../entities/card-printing.entity';

export class CardEntityMapper {
  public static toCardEntity(card: FabCard): ICard {
    const cardMapped = new CardEntity();
    cardMapped.artists = card.artists;
    cardMapped.cardIdentifier = card.cardIdentifier;
    cardMapped.classes = card.classes;
    cardMapped.defaultImage = card.defaultImage;
    cardMapped.name = card.name;
    cardMapped.rarity = card.rarity?.toString();
    cardMapped.setIdentifiers = card.setIdentifiers; // Check if needed
    cardMapped.sets = card.sets;
    cardMapped.typeText = card.typeText;

    card.printings.forEach((printing: Printing) => {
      const cardPrintingMapped = new CardPrintingEntity();
      cardPrintingMapped.artists = printing.artists;
      cardPrintingMapped.edition = printing.edition?.toString();
      cardPrintingMapped.foiling = printing.foiling?.toString();
      cardPrintingMapped.setIdentifier = printing.identifier;
      cardPrintingMapped.image = printing.image;
      cardPrintingMapped.oppositeImage = printing.oppositeImage;
      cardPrintingMapped.print = printing.print;
      cardPrintingMapped.set = printing.set?.toString();
      cardPrintingMapped.treatment = printing.treatment?.toString();

      cardMapped.printings.push(cardPrintingMapped);
    });

    return cardMapped;
  }
}
