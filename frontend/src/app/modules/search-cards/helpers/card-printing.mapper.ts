import { CardPrintingDto } from '../models/dto/card-printing.dto';
import { CardPrintingEntity } from '../models/entities/card-printing.entity';

export class CardPrintingMapper {
  static fromDto(dto: CardPrintingDto): CardPrintingEntity {
    return {
      artists: dto.artists ?? [],
      edition: dto.edition,
      foiling: dto.foiling,
      identifier: dto.identifier,
      image: dto.image ?? 'assets/default-card.png',
      oppositeImage: dto.oppositeImage,
      print: dto.print,
      set: dto.set,
      treatment: dto.treatment,
    };
  }

  static fromDtoArray(dtos: CardPrintingDto[]): CardPrintingEntity[] {
    return dtos.map((dto) => this.fromDto(dto));
  }
}
