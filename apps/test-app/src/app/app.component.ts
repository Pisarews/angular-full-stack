import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../app/Models/Course.Model';
import { CourseService } from '../app/course/course.service';

@Component({
  selector: 'recrutation-fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, public courseServ: CourseService) {}

  ngOnInit() {
    this.courseServ.getAllCourses();
  }
}
