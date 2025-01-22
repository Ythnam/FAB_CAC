import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'any'
})
export class CardsService {

  constructor(private readonly apiService: ApiService) {}

  getAllCardsByName(name: string) : Observable<any[]> {
    const params = { name };
    return this.apiService.get<any[]>('cards', params);
  }
}
