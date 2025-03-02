import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomerService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post()
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto): Promise<CustomerDto> {
    const customer = await this.customerService.createCustomer(createCustomerDto);

    return customer;
  }

  @Get()
  async getCustomers(): Promise<CustomerDto[]> {
    const customers = await this.customerService.getCustomers();

    return customers;
  }

  @Get(':id')
  async getCustomerById(@Param('id', ParseIntPipe) id: number): Promise<CustomerDto> {
    const customer = await this.customerService.getCustomerById(id);

    return customer;
  }
}
