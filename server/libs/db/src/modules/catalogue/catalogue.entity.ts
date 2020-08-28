import { Entity, Column, PrimaryGeneratedColumn, Timestamp, OneToMany } from 'typeorm';
import {CollectioEntity} from '../collection/collection.entity';

@Entity({ name: 'catalogues' })
export class CatalogueEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    videdesc: string;

    @Column()
    videoimg: string;

    @Column()
    videoyear: string;

    @Column()
    videotype: string;

    @OneToMany(type => CollectioEntity, collectio => collectio.catalogue_id)
    collectios:CollectioEntity[];


    @Column({
        type: 'timestamp',
        onUpdate: 'current_timestamp',
        default: () => 'current_timestamp',
    })
    createtime:Timestamp;
}