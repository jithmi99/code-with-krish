import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrderItem } from './entity/order-item.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order,OrderItem])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
