import { Injectable, NotFoundException } from '@nestjs/common';
import { AdminDto } from './dto/admin.interface.dto';
import { Model } from 'mongoose';
import { Admin } from './interfaces/admin.interface';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AdminService {
    constructor(
        @InjectModel('Admin') private readonly adminModel: Model<Admin> 
    ) {}

    async visitorReview(visitorData: AdminDto): Promise<Admin> {
        const newVisitor = new this.adminModel(visitorData);
        return await newVisitor.save();
    }

    async findCommentById(id: string) {
        return await this.adminModel.findOne( {id: id});
    }

    async findCommentByNickname(nickaname: string): Promise<Admin> {
        return await this.adminModel.findOne( { visitorNick: nickaname } );
    }

    async aproveComment(commentId: string, aprove: boolean) {
        return await this.adminModel.findOneAndUpdate(
            {id: commentId},
            {$set: { aproved: aprove }}
        );
    }

    async findCommentsByDate(dateComment: string): Promise<Admin[]> {
        const promises = await this.adminModel.find({ dateAdded: dateComment });
        return await Promise.all(promises);     // array of Promise objects
    }

    async updateComment(id: string, comment: AdminDto): Promise<Admin> {
        return await this.adminModel.findOneAndUpdate({ id: id }, comment);
    }

    async removeComment(id: string) {
        await this.adminModel.findOneAndRemove({ id: id });
    }

    async commentExist(result) {
        if (!result) {
           throw new NotFoundException('Comment not found.');
        }
   }

    async addLogs(id: string, action: string) {
        var date = new Date().toLocaleString('hu-HU', {timeZone: 'CET'});
        await console.log('Comment ' + action + ': ' + date + ' --- id: ' + id);
    }
}
