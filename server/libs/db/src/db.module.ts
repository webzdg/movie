import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import {CatalogueModule} from './modules/catalogue/catalogue.module';
import {CollectionModule} from './modules/collection/collection.module';
import { CatalogueEntity } from './modules/catalogue/catalogue.entity';
import {CollectioEntity} from './modules/collection/collection.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "123456789",
        "database": "video",
        "synchronize": true,
        "entities":[CatalogueEntity,CollectioEntity]
    }),
    CatalogueModule,
    CollectionModule
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule { }
