import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { InventoryDto } from './dto/inventory.dto';
import { InventoryService } from './inventories.service';
import { plainToInstance } from 'class-transformer';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { ValidateStock } from './dto/validate-stock.dto';

@Controller('products')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}
  @Post()
  createInventory(@Body() createInventoryDto: CreateInventoryDto): InventoryDto {
    const inventory = this.inventoryService.createInventory(createInventoryDto);
    return plainToInstance(InventoryDto, inventory, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async getInventorys(): Promise<InventoryDto[]> {
    const inventorys = await this.inventoryService.getInventories();
    return plainToInstance(InventoryDto, inventorys, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  async getInventoryById(@Param('id', ParseIntPipe) id: number): Promise<InventoryDto> {
    const inventory = await this.inventoryService.getInventoryById(id);
    return plainToInstance(InventoryDto, inventory, { excludeExtraneousValues: true });
  }

  @Get(':id/validate')
  async validateStockById(@Param('id', ParseIntPipe) id: number, @Query('quantity') quantity: number): Promise<ValidateStock> {
    const validateStockResult: ValidateStock = await this.inventoryService.validateStock(id, quantity);
    return validateStockResult;
  }
}
