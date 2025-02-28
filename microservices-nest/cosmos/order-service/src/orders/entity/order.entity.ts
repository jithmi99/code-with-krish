import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { OrderItem } from "./order-item.entity";


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    customerId: number;
    @CreateDateColumn()
    createAt: Date;
    @Column({default: 'pending'})
    staus: string;
    @OneToMany(()=>OrderItem, (item) => item.order)
    items: OrderItem[];
}

