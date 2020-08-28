import { Injectable } from '@nestjs/common';
import { CatalogueEntity } from './catalogue.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogueService {
    constructor(
        @InjectRepository(CatalogueEntity)
        private readonly catalogueRepository: Repository<CatalogueEntity>
    ){}
    async findAll(){
        return await this.catalogueRepository.find({ relations: ['collectios'] })
    }

    async findOne(id:number){
        return await this.catalogueRepository.findOne(id);
    }

    async create(param){
        return await this.catalogueRepository.save(param)
    }

    async delete(id:number){
        return this.catalogueRepository.delete(id);
    }
}
