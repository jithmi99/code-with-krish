import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { InventoryDto } from './dto/inventory.dto';
import { InventoryService } from './inventories.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { ValidateStock } from './dto/validate-stock.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller('products')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}
  @Post()
  async createInventory(@Body() createInventoryDto: CreateInventoryDto): Promise<InventoryDto> {
    const inventory = await this.inventoryService.createInventory(createInventoryDto);
    return inventory;
  }

  @Get()
  async getInventories(): Promise<InventoryDto[]> {
    const inventories = await this.inventoryService.getInventories();
    return inventories
  }

  @Get(':id')
  async getInventoryById(@Param('id', ParseIntPipe) id: number): Promise<InventoryDto> {
    const inventory = await this.inventoryService.getInventoryById(id);
    return inventory;
  }

  @Get(':id/validate')
  async validateStockById(@Param('id', ParseIntPipe) id: number, @Query('quantity') quantity: number): Promise<ValidateStock> {
    const validateStockResult: ValidateStock = await this.inventoryService.validateStock(id, quantity);
    return validateStockResult;
  }

  @Patch(':id/quantity')
  async updateInventory(@Param('id', ParseIntPipe) id: number, @Body() updateInventoryDto: UpdateInventoryDto): Promise<InventoryDto> {
    const inventory = await this.inventoryService.updateInventoryById (id, updateInventoryDto.quantity);
    return inventory;
  }
}
