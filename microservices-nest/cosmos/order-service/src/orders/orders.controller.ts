import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    @Get(':id')
    getOrders() {
        return 'get all orders';
    }
}
