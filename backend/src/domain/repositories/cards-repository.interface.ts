import { ICard } from '../entities/cards/card.interface';

export interface ICardsRepository {
  findAll(): Promise<Array<ICard>>;
  findAllCardsFilteredBySet(set: string): Promise<Array<ICard>>;
}
