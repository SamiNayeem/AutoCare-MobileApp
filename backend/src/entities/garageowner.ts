import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Garage } from "./garage";
import { Service_list } from "./servicelist";
import { Service_order } from "./serviceorder";

@Entity('Garage_owners')
export class Garage_owner extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column({ unique: true,length: 11 })
    phone:string;

    @Column({ unique: true })
    email:string;

    @Column()
    password:string;

    @OneToOne(()=>Garage,(garage)=>garage.garage_owner)
    garage:Garage;
}