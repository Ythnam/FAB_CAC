import { ICard } from '../entities/cards/card.interface';

export interface ICardsRepository {
  findAll(name?: string): Promise<Array<ICard>>;
  findAllCardsFilteredBySet(set: string): Promise<Array<ICard>>;
}
