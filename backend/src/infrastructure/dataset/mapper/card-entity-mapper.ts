import { Card as FabCard, Printing } from '@flesh-and-blood/types';
import { ICard } from '@/domain/entities/cards/card.interface';
import { CardEntity } from '../entities/card.entity';

export class CardEntityMapper {
  public static toCardEntity(card: FabCard): ICard[] {
    const cards = card.printings.map((printing: Printing) => {
      const cardMapped = new CardEntity();
      cardMapped.cardIdentifier = card.cardIdentifier;
      cardMapped.classes = card.classes; // CT
      cardMapped.name = card.name;
      cardMapped.rarity = card.rarity?.toString();
      cardMapped.artists = printing.artists;
      cardMapped.edition = printing.edition?.toString();
      cardMapped.foiling = printing.foiling?.toString();
      cardMapped.setIdentifier = printing.identifier;
      cardMapped.image = printing.image;
      cardMapped.set = printing.set?.toString();
      cardMapped.treatment = printing.treatment?.toString();
      return cardMapped;
    });
    return cards;
  }
}
