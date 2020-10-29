import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseService } from './Services/Course.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CourseService],
})
export class AppModule {}
