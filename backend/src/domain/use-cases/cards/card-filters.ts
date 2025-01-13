import { StringHelper } from '@/domain/helpers/string-helper';

export class CardFilters {
  name: string;

  constructor(name?: string) {
    this.name = StringHelper.isStringEmpty(name) ? '*' : name;
  }
}
