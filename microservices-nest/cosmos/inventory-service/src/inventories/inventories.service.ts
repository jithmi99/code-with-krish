import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entity/inventory.entity';
import { Repository } from 'typeorm';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { ValidateStock } from './dto/validate-stock.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async getInventories(): Promise<Inventory[]> {
    return this.inventoryRepository.find();
  }

  createInventory(createInventoryDto: CreateInventoryDto): Inventory {
    const inventory: Inventory = this.inventoryRepository.create(createInventoryDto);
    return inventory;
  }

  async getInventoryById(id: number): Promise<Inventory> {
    const inventory: Inventory = await this.inventoryRepository.findOne({ where: { id }});

    if (!inventory) {
        throw new NotFoundException(`Inventory with ID ${id} not found`);
    }

    return inventory;
  }

  async validateStock(id: number, quantity: number): Promise<ValidateStock> {
    const inventory: Inventory = await this.inventoryRepository.findOne({ where: { id }});

    if (inventory?.quantity < quantity) {
        return ({available: false})
    }

    return ({available: true});
  }
}
