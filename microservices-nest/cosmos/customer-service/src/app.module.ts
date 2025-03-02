import { Module } from '@nestjs/common';
import { Customer } from './customers/entity/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/customers.module';

@Module({
  imports: [
    CustomerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      // host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cosmos',
      entities: [Customer],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
