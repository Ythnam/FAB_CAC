export class CardFilters {
  name: string;

  constructor(name?: string) {
    this.name = name ?? '*';
  }
}
