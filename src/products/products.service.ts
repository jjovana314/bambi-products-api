import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsDto } from './dto/products.interface.dto';
import { Products } from './interfaces/products.interface';
import { ProductsArrayDto } from './dto/products.array.interface.dto';
import { ProductService } from 'src/product/product.service';


@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productsModel: Model<Products>,
    private readonly productService: ProductService) {}

  async createProduct(inputData: ProductsDto): Promise<Products> {
    await this.productExist(inputData.id, true);    // check if product already exists
    const newProduct = new this.productsModel(inputData);
    const result = await newProduct.save();
    this.addLogs(inputData.id, 'created');
    return await result;
  }

  async productExist(id: string, create: Boolean=false, updateOrFind: Boolean=false) {
    const productExist = await this.productsModel.findOne({ id: id });
    if (create && productExist) {
      // if we want to create product, it should not be in database
      throw new HttpException(
        `Product with id: ${id} already exist.`,
        HttpStatus.BAD_REQUEST
      );
    }
    if (updateOrFind && !productExist) {
      // if we want to find/update product, it should be in database
      throw new NotFoundException(`Product with id: ${id} does not exist.`)
    }
  }

  async createProducts(inputData: ProductsArrayDto): Promise<Products[]> {
    const products = [];
    for (let product of inputData.products) {
      await this.productExist(product.id, true);      // check if product already exists
      const newProduct = new this.productsModel(product);
      products.push(newProduct.save());
      this.addLogs(product.id, 'created');
    }
    return await Promise.all(products);     // array of Promise objects
  }

  async getProduct(id: string): Promise<Products> {
    await this.productExist(id, false, true);
    const result = await this.productsModel.findOne({ id: id });
    return await result;
  }

  async getAllProducts() {
    return await this.productsModel.find({});
  }

  async updateProduct(id: string, updateData: ProductsDto): Promise<Products> {
    await this.productExist(id, false, true);
    return await this.productsModel.findOneAndUpdate({id: id}, updateData);
  }

  async addLogs(id: string, action: string) {
    var date = new Date().toLocaleString('hu-HU', {timeZone: 'CET'});
    await console.log(
      `Product with id: ${id} ${action} --- ${date}`
    );
  }

  async deleteProduct(id: string) {
    await this.productExist(id, false, true);
    await this.productsModel.findOneAndRemove({id: id});
  }
}
