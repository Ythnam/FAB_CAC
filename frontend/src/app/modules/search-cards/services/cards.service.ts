import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { ApiService } from '../../../core/services/api.service';
import { CardDto } from '../models/dto/card.dto';
import { CardEntity } from '../models/entities/card.entity';
import { CardMapper } from '../helpers/card.mapper';

@Injectable({
  providedIn: 'any',
})
export class CardsService {
  constructor(private readonly apiService: ApiService) {}

  getAllCardsByName(name: string): Observable<CardEntity[]> {
    const params = { name };
    return this.apiService.get<CardDto[]>('cards', params).pipe(map((cardsDto: CardDto[]) => CardMapper.fromDtoArray(cardsDto)));
  }
}
