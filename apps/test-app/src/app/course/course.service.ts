import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/Course.Model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public course: Course;
  public courses: Course[] = [];
  public filteredCourses: Course[] = [];

  constructor(private http: HttpClient) {}

  getCourse(id: Number) {
    const url = `/api/courses/${id.toString()}`;
    console.log(url);
    this.http.get<Course>(url).subscribe((p) => {
      console.log(p as Course);
      this.course = p as Course;
      console.log(this.course);
      return p as Course;
    });
  }

  getAllCourses() {
    this.http.get<Course[]>('/api/courses').subscribe((p) => {
      console.log(p as Course[]);
      this.courses = p as Course[];
      console.log(this.courses);
      return p as Course[];
    });
  }
}
