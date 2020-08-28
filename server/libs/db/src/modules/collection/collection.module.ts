import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CollectioEntity} from './collection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollectioEntity])],
  controllers: [CollectionController],
  providers: [CollectionService]
})
export class CollectionModule {}
