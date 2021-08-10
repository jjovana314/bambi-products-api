import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductsDto } from './dto/products.interface.dto';
import { ProductsService } from './products.service';
import { Products } from './interfaces/products.interface';
import { ProductsArrayDto } from './dto/products.array.interface.dto';
import { ProductsArray } from './interfaces/productsArray.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() inputData: ProductsDto): Promise<Products> {
    return await this.productsService.createProduct(inputData)
  }

  @Post('createProducts')
  async createProducts(@Body() inputData: ProductsArrayDto): Promise<Products[]> {
    return await this.productsService.createProducts(inputData);
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Products> {
    return await this.productsService.getProduct(id);
  }

  @Get()
  async getAllProducts() {
    return await this.productsService.getAllProducts();
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() inputData: ProductsDto): Promise<Products> {
    const result = await this.productsService.updateProduct(id, inputData);
    this.productsService.addLogs(id, 'updated');
    return result;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    await this.productsService.deleteProduct(id);
    this.productsService.addLogs(id, 'deleted');
  }
}
