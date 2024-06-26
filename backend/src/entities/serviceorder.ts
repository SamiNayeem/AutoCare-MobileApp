import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Car_owner } from "./carowner";
import { Garage } from "./garage";

@Entity('Service_order')
export class Service_order extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    home_delivery:boolean;

    @Column({nullable: true})
    address:string;

    @Column()
    service_name:string;

    @Column()
    service_date:string;

    @Column()
    service_end_date:string;

    @Column({default:'pending'})
    status:string;

    @ManyToOne(()=>Garage,(garage)=>garage.orders)
    garage:Garage;

    @ManyToOne(()=>Car_owner,(car_owner)=>car_owner.orders)
    carOwner:Car_owner;
} 