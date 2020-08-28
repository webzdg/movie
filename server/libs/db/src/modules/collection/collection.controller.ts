import { Controller, Get, Query, HttpException, HttpStatus, Post, Body } from '@nestjs/common';
import {CollectionService} from './collection.service';

@Controller('collection')
export class CollectionController {
    constructor(private readonly collectionService:CollectionService){}

    @Get()
    async findAll(){
        try {
            const result = await this.collectionService.findAll()
            return {
                result,
                code :1,
                message : ""
            }
        } catch (error) {
            return {
                result : [],
                code :0,
                message : JSON.stringify(error)
            }
        }
    }
    //查找其中一个ID
    @Get("/byone")
    async findOne(@Query('id') id:number){
        if(!id){
            throw new HttpException(
                {
                    message: '请正确传参'
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        try {
            const result = await this.collectionService.findOne(id);
            return {
                result,
                code :1,
                message : ""
            }
        } catch (error) {
            return {
                result : [],
                code :0,
                message : JSON.stringify(error)
            }
        }
    }

    //查找指定哪一个电视
    @Get("/getcatalog")
    async findCatalog(@Query('catalogueIdId') catalogueIdId:number){
        if(!catalogueIdId){
            throw new HttpException(
                {
                    message: '请正确传参'
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        try {
            const result = await this.collectionService.findCatalog(catalogueIdId);
            return {
                result,
                code :1,
                message : ""
            }
        } catch (error) {
            return {
                result : [],
                code :0,
                message : JSON.stringify(error)
            }
        }
    }
    //新增一个电影的集
    @Post("/addcollection")
    async addCollection(@Body() body){
        if(!body.catalogueIdId){
            throw new HttpException(
                {
                    message: 'catalogueIdId为必传参数 '
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        try {
            const result = await this.collectionService.addCollection(body);
            return {
                result,
                code :1,
                message : ""
            }
        } catch (error) {
            return {
                result : [],
                code :0,
                message : JSON.stringify(error)
            }
        }
    }
}
