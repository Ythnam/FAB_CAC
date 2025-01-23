import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../../../core/services/api.service';
import { CardDto } from '../dto/card.dto';

@Injectable({
  providedIn: 'any',
})
export class CardsService {
  constructor(private readonly apiService: ApiService) {}

  getAllCardsByName(name: string): Observable<any[]> {
    const params = { name };
    return this.apiService.get<CardDto[]>('cards', params);
  }
}
