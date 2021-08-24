import { Injectable, NotFoundException } from '@nestjs/common';
import { AdminDto } from './dto/admin.interface.dto';
import { Model } from 'mongoose';
import { Admin } from './interfaces/admin.interface';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>
  ) { }

  async visitorReview(visitorData: AdminDto): Promise<Admin> {
    const newVisitor = new this.adminModel(visitorData);
    return await newVisitor.save();
  }

  async findCommentById(_id: string) {
    return await this.adminModel.findById(_id);
  }

  async findCommentByNickname(nickaname: string): Promise<Admin> {
    return await this.adminModel.findOne(
      { visitorNick: nickaname }
    );
  }

  async aproveComment(commentId: string, aprove: boolean) {
    return await this.adminModel.findByIdAndUpdate(
      commentId,
      { $set: { aproved: aprove } }
    );
  }

  async findCommentsByDate(dateComment: string): Promise<Admin[]> {
    const promises = await this.adminModel.find(
      { dateAdded: dateComment }
    );
    return await Promise.all(promises);     // array of Promise objects
  }

  async updateComment(_id: string, comment: AdminDto): Promise<Admin> {
    return await this.adminModel.findByIdAndUpdate(_id, comment);
  }

  async removeComment(_id: string) {
    await this.adminModel.findByIdAndRemove(_id);
  }

  async commentExist(result) {
    if (!result) {
      throw new NotFoundException('Comment not found.');
    }
  }

  async addLogs(id: string, action: string) {
    var date = new Date().toLocaleString('hu-HU', { timeZone: 'CET' });
    await console.log(`Comment ${action}: ${date} --- id: ${id}`);
  }
}
