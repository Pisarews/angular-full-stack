import { Injectable } from '@nestjs/common';
import { Course } from '../Models/Course.Model';

@Injectable()
export class CourseService {

  public readonly courses: Course[] = [
    {
      id: 1,
      name: 'French',
      images: ['images'],
      instructors: [{ name: 'Sebastian Taylor', image: 'Sample Image' }],
      status: 'DRAFT',
    },
    {
      id: 2,
      name: 'Biochemistry',
      images: ['Sample Images'],
      instructors: [{ name: 'Sebastian Taylor', image: 'Sample Image' }],
      status: 'PUBLISHED',
    },
    {
      id: 3,
      name: 'Physics',
      images: ['Sample Images'],
      instructors: [{ name: 'Christian Bach', image: 'Sample Image' }],
      status: 'PUBLISHED',
    },
    {
      id: 4,
      name: 'Biology',
      images: ['Sample Images'],
      instructors: [{ name: 'Vin Diesel', image: 'Sample Image' }],
      status: 'PUBLISHED',
    },
    {
      id: 5,
      name: 'Mathematics',
      images: ['Sample Images'],
      instructors: [{ name: 'Margaret Three', image: 'Sample Image' }],
      status: 'DRAFT',
    },
    {
      id: 6,
      name: 'English',
      images: ['Sample Images'],
      instructors: [{ name: 'Frans Van Boom', image: 'Sample Image' }],
      status: 'PUBLISHED',
    },
  ];

  public course: Course;

  findAll(): Course[] {
    return this.courses;
  }

  findItem(param: number): Course {
    // console.log(this.courses);
    console.log(this.courses.find((p: Course) => p.id == param));
    this.course = this.courses.find((p:Course) => p.id == param);
    return this.course;
  }
}
