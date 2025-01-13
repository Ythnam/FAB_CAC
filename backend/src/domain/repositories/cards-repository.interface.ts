import { ICard } from '../entities/cards/card.interface';
import { CardFilters } from '../use-cases/cards/card-filters';

export interface ICardsRepository {
  findAll(filters: CardFilters): Promise<Array<ICard>>;
  findAllCardsFilteredBySet(set: string): Promise<Array<ICard>>;
  findAllCardsFilteredByArtist(artist: string): Promise<Array<ICard>>;
}
