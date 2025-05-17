import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
