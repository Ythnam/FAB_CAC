import { CardDto } from '../models/dto/card.dto';
import { CardEntity } from '../models/entities/card.entity';
import { CardPrintingMapper } from './card-printing.mapper';

export class CardMapper {
  static fromDto(dto: CardDto): CardEntity {
    return {
      artists: dto.artists ?? [],
      cardIdentifier: dto.cardIdentifier,
      classes: dto.classes ?? [],
      defaultImage: dto.defaultImage ?? 'assets/default-card.png',
      name: dto.name,
      printings: dto.printings ? CardPrintingMapper.fromDtoArray(dto.printings) : [],
      rarity: dto.rarity,
      setIdentifiers: dto.setIdentifiers ?? [],
      sets: dto.sets ?? [],
      typeText: dto.typeText,
    };
  }

  static fromDtoArray(dtos: CardDto[]): CardEntity[] {
    return dtos.map((dto) => this.fromDto(dto));
  }
}
