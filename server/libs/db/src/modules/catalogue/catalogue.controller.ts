import { Controller, Get, Query, Post, Body, HttpException, HttpStatus, UseFilters, Delete } from '@nestjs/common';
import { CatalogueService } from './catalogue.service'

@Controller('catalogue')
export class CatalogueController {

    constructor(private readonly catalogueService: CatalogueService) { }

    @Get()
    async findAll() {
        
        try {
            const result = await this.catalogueService.findAll();
            return {
                result,
                code: 1,
                message: ""
            }
        } catch (error) {
            return {
                result: [],
                code: 0,
                message: JSON.stringify(error)
            }
        }
    }

    @Get("/byone")
    async findOne(@Query('id') id:number){
        if(!id){
            throw new HttpException(
                {
                    message: 'id 为必传'
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        try {
            const result = await this.catalogueService.findOne(id);
            return {
                result,
                code: 1,
                message: ""
            }
        } catch (error) {
            return {
                result: [],
                code: 0,
                message: JSON.stringify(error)
            }
        }
    }

    @Post("/create")
    async create(@Body() param) {
        if (!param.name) {
            throw new HttpException(
                {
                    message: '请正确传参'
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        try {
            const result = await this.catalogueService.create(param);
            return {
                result,
                code: 1,
                message: "增加成功"
            };
        } catch (error) {
            return {
                result : [],
                code :0,
                message : JSON.stringify(error)
            }
        }
    }

    @Delete("/delete")
    async delete(@Body('id') id: number) {
        if (!id) {
            throw new HttpException({ message: "请传入删选Id" }, HttpStatus.BAD_REQUEST)
        }
        try {

            const result = await this.catalogueService.delete(id);
            return {
                result,
                code: 1,
                message: "删除成功"
            }
        } catch (error) {
            return {
                result: [],
                code: 0,
                message: JSON.stringify(error)
            }
        }
    }
}
