import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductClassDto } from './dto/product.interface.dto'
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>) 
  {}

  async addProduct(
    product: ProductClassDto
  ): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async allProductClasses() {
    return await this.productModel.find({});
  }

  async findProductById(id: string): Promise<Product> {
    return await this.productModel.findOne( {id: id} );
  }

  async findProductByName(name: string): Promise<Product> {
    return await this.productModel.findOne( {title: name} );
  }

  async updateProduct(
    id: string, product: ProductClassDto
  ): Promise<Product> {
    return await this.productModel.findOneAndUpdate(
      { id: id }, product
    );
  }

  async removeProduct(id: string) {
    return await this.productModel.findOneAndRemove(
      { id: id }
    );
  }

  async addLogs(id: string, action: string) {
    var date = new Date().toLocaleString('hu-HU', {timeZone: 'CET'});
    console.log(`Product class with id ${id} ${action} at: ${date}`);
  }

  async addProductClassList(productClassList: ProductClassDto[]) {
    const products = [];
    for (let current_product of productClassList) {
      const newProduct = new this.productModel(current_product);
      products.push(newProduct.save());
      this.addLogs(newProduct.id, 'added');
    }
    return await Promise.all(products);
  }
}
