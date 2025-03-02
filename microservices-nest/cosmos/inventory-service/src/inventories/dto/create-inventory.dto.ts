import { IsNumber, IsString, Min } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsNumber()
  @Min(0)
  quantity: number;
}