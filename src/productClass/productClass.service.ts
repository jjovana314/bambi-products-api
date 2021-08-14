import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductClassDto } from './dto/productClass.interface.dto';
import { ProductClass } from './interfaces/productClass.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductClassService {
  constructor(
    @InjectModel('ProductClass') private readonly productClassModel: Model<ProductClass>) 
  {}

  async addProduct(
    product: ProductClassDto
  ): Promise<ProductClass> {
    const newProductClass = await new this.productClassModel(product);
    const result = await newProductClass.save();
    this.addLogs(product.id, 'added');
    return await result;
  }

  async allProductClasses() {
    return await this.productClassModel.find({});
  }

  async findProductById(id: string): Promise<ProductClass> {
    return await this.productClassModel.findOne( {id: id} );
  }

  async findProductByName(name: string): Promise<ProductClass> {
    return await this.productClassModel.findOne( {title: name} );
  }

  async updateProduct(
    id: string, product: ProductClassDto
  ): Promise<ProductClass> {
    return await this.productClassModel.findOneAndUpdate(
      { id: id }, product
    );
  }

  async removeProduct(id: string) {
    return await this.productClassModel.findOneAndRemove(
      { id: id }
    );
  }

  async addLogs(id: string, action: string) {
    var date = new Date().toLocaleString('hu-HU', {timeZone: 'CET'});
    console.log(`Product class with id ${id} ${action} at: ${date}`);
  }

  async addProductClassList(productClassList: ProductClassDto[]) {
    const productsClasses = [];
    for (let currentProductClass of productClassList) {
      const newProductClass = new this.productClassModel(currentProductClass);
      productsClasses.push(newProductClass.save());
      this.addLogs(newProductClass.id, 'added');
    }
    return await Promise.all(productsClasses);
  }
}
