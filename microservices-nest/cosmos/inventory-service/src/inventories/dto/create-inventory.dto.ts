import { IsNumber, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsNumber()
  address: number;
}