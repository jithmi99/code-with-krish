import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entity/inventory.entity';
import { InventoryService } from './inventories.service';
import { InventoryController } from './inventories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory])],
  providers: [InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}
