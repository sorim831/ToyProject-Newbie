// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManageModule } from './manage.module'; // <-- 추가

@Module({
  imports: [ManageModule], // <-- 여기에 등록
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
