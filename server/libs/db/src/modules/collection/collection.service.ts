import { Injectable } from '@nestjs/common';
import {CollectioEntity} from './collection.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CollectionService {

    constructor(
        @InjectRepository(CollectioEntity)
        private readonly catalogueRepository: Repository<CollectioEntity>
    ){}

    async findAll(){
        return await this.catalogueRepository.find()
    }

    async findOne(id){
        return await this.catalogueRepository.findOne(id);
    }

    async findCatalog(catalogue_id){
        return await this.catalogueRepository.find({where : {catalogue_id}})
    }

    async addCollection(body){
        console.log(body)
        return await this.catalogueRepository.save(body);
    }
}
