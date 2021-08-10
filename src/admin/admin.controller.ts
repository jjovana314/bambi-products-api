import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './dto/admin.interface.dto';
import { Admin } from './interfaces/admin.interface';
import { AproveDto } from './dto/aprove.interface.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('addComment')
    async visitorReview(@Body() visitorData: AdminDto): Promise<Admin> {
        const result = await this.adminService.visitorReview(visitorData);
        await this.adminService.addLogs(visitorData.id, 'added');
        return await result;
    }

    @Get('filterByNickname')
    async findCommentByNickname(@Query() inputNick): Promise<Admin> {
        // should be called like this: http://localhost:3000/admin/filterByNickName?nickname=visitorNick
        const result = await this.adminService.findCommentByNickname(inputNick.nickname);
        await this.adminService.commentExist(result);
        return await result;
    }

    @Get('filterById/:id')
    async findCommentById(@Param('id') id: string): Promise<Admin> {
        const result = await this.adminService.findCommentById(id);
        await this.adminService.commentExist(result);
        return await result;
    }

    @Get('filterByDate/:dateComment')
    async findCommentsByDate(@Param('dateComment') dateComment: string): Promise<Admin[]> {
        const result = await this.adminService.findCommentsByDate(dateComment);
        await this.adminService.commentExist(result);
        return await result;
    }

    @Patch('update/:id')
    async updateComment(@Param('id') commentId: string, @Body() input: AdminDto): Promise<Admin> {
        const result = await this.adminService.updateComment(commentId, input);
        await this.adminService.addLogs(commentId, 'updated');
        return await result;
        
    }
    @Patch('aprove/:id')
    async aproveComment(@Param('id') commentId: string, @Body() input: AproveDto) {
        const result = await this.adminService.aproveComment(commentId, input.aprove);
        await this.adminService.addLogs(commentId, 'aproved');
        return await result;
    }

    @Delete()
    async deleteComment(@Query() input) {
        // http://localhost:3000/admin?id=ID
        await this.adminService.removeComment(input.id);
        await this.adminService.addLogs(input.id, 'removed');
    }
}
