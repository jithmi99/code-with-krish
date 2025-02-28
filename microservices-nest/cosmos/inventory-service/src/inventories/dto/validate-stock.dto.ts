import { Expose } from 'class-transformer';

export class ValidateStock {
  @Expose()
  available: boolean;

  constructor(available: boolean) {
    this.available = available
  }
}
