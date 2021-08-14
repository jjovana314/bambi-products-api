import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductClassService } from './productClass.service';
import { ProductClassDto } from './dto/productClass.interface.dto';
import { ProductClass } from './interfaces/productClass.interface';
import { Model } from 'mongoose';

@Controller('productClass')
export class ProductClassController {
  constructor(private readonly productService: ProductClassService) {}

  @Post()
  addProduct(@Body() product: ProductClassDto): Promise<ProductClass> {
    const result = this.productService.addProduct(product);
    this.productService.addLogs(product.id, 'added');
    return result;
  }

  @Get()
  async allProductClasses() {
    // localhost:3000/productClasses
    return await this.productService.allProductClasses();
  }

  @Get(':id')
  findProductById(@Param('id') id: string): Promise<ProductClass> {
    return this.productService.findProductById(id);
  }

  @Post('findByName')
  findProductByName(
    @Body() product: ProductClassDto
  ): Promise<ProductClass> {
    return this.productService.findProductByName(product.title);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string, @Body() product: ProductClassDto
  ): Promise<ProductClass> {
    const result = await this.productService.updateProduct(id, product);
    await this.productService.addLogs(id, 'updated');
    return await result;
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
    await this.productService.removeProduct(id);
    await this.productService.addLogs(id, 'removed');
  }

  @Post('addProductClassList')
  async addProductClassList (
    @Body() productClassList: ProductClassDto[]
  ) {
    return await this.productService.addProductClassList(
      productClassList
    );
  }
}
