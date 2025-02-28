import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomerService } from './customers.service';
import { plainToInstance } from 'class-transformer';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto): CustomerDto {
    const customer = this.customerService.createCustomer(createCustomerDto);
    return plainToInstance(CustomerDto, customer, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async getCustomers(): Promise<CustomerDto[]> {
    const customers = await this.customerService.getCustomers();
    return plainToInstance(CustomerDto, customers, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':id')
  async getCustomerById(@Param('id', ParseIntPipe) id: number): Promise<CustomerDto> {
    const customer = await this.customerService.getCustomerById(id);
    return plainToInstance(CustomerDto, customer, { excludeExtraneousValues: true });
  }
}
