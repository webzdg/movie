import { Entity, PrimaryGeneratedColumn, Column,Timestamp, ManyToOne } from "typeorm";
import {CatalogueEntity} from '../catalogue/catalogue.entity'

@Entity({ name: 'collection' })
export class CollectioEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CatalogueEntity,catalogue=>catalogue.id)
    catalogue_id:CatalogueEntity;

    @Column()
    collection_name:string;
    
    @Column()
    collection_url:string;

    @Column({
        type: 'timestamp',
        onUpdate: 'current_timestamp',
        default: () => 'current_timestamp',
    })
    create_time:Timestamp;
}