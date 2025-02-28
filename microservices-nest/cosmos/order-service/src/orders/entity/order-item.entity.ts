import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Order } from "./order.entity";

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    customerId: number;
    @CreateDateColumn()
    createAt: Date;
    @Column({default: 'pending'})
    staus: string;
    @ManyToOne(() => Order, (order) => order.items)
    order: Order;
}




