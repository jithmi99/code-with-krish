import { Module } from '@nestjs/common';
import { Inventory } from './inventories/entity/inventory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from './inventories/inventories.module';

@Module({
  imports: [
    InventoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cosmos',
      entities: [Inventory],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
