import { Expose } from 'class-transformer';

export class CustomerDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  email: string;
  @Expose()
  address: string;

  constructor(partial: Partial<CustomerDto>) {
    Object.assign(this, partial);
  }
}
