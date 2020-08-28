import { Module } from '@nestjs/common';
import { CatalogueController } from './catalogue.controller';
import { CatalogueService } from './catalogue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogueEntity } from './catalogue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatalogueEntity])],
  controllers: [CatalogueController],
  providers: [CatalogueService]
})
export class CatalogueModule {}
