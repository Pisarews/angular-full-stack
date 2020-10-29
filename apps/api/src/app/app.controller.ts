import { Controller, Get, Param } from '@nestjs/common';
import { Course } from './Models/Course.Model';
import { CourseService } from './Services/Course.service';

@Controller()
export class AppController{
  constructor(private readonly courseService: CourseService) {

  }

  @Get('courses')
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Get('courses/:id')
   findOne(@Param('id') param): Course {
    return this.courseService.findItem(param);
  }
}
