import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductClassDto } from './dto/product.interface.dto';
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose';

@Controller('productClasses')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(@Body() product: ProductClassDto): Promise<Product> {
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
  findProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.findProductById(id);
  }

  @Post('findByName')
  findProductByName(
    @Body() product: ProductClassDto
  ): Promise<Product> {
    return this.productService.findProductByName(product.title);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string, @Body() product: ProductClassDto
  ): Promise<Product> {
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
