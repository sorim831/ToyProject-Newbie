import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { ManageService } from './manage.service';

@Controller('manage')
export class ManageController {
  constructor(private readonly officerService: ManageService) {}

  @Post()
  async create(@Body() body: { name: string; rank: string }) {
    return await this.officerService.createOfficer(body);
  }

  @Get()
  async findAll() {
    return await this.officerService.getOfficers();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBody: { name: string; rank: string },
  ) {
    return await this.officerService.updateOfficer(Number(id), updateBody);
  }
}
