import { Expose } from 'class-transformer';

export class InventoryDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  price: number;
  @Expose()
  quantity: number;

  constructor(partial: Partial<InventoryDto>) {
    Object.assign(this, partial);
  }
}
