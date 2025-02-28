import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async getCustomers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  createCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const customer: Customer = this.customerRepository.create(createCustomerDto);
    return customer;
  }

  async getCustomerById(id: number): Promise<Customer> {
    const customer: Customer = await this.customerRepository.findOne({ where: { id }});

    if (!customer) {
        throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return customer;
  }
}
