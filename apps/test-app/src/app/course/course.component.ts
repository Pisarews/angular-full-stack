import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/Course.Model';
import { CourseService } from './course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit, AfterViewChecked {
  public course: Course;
  public inputFilter = '';
  public filter: string;

  constructor(public courseServ: CourseService) {}

  ngOnInit(): void {
    console.log('hi');
    if (this.courseServ.courses)
      this.courseServ.filteredCourses = this.courseServ.courses;
    console.log(this.courseServ.filteredCourses);
  }

  ngAfterViewChecked() {
    this.courseServ.filteredCourses = this.courseServ.courses;
  }

  public filterItems(): void {
    //like google search inside words
    if (this.filter == 'name') {
      console.log('onInput', this.inputFilter);
      if (this.inputFilter !== '' || undefined) {
        this.courseServ.filteredCourses = this.courseServ.courses.filter((p) =>
          p.name.toUpperCase().includes(this.inputFilter.toUpperCase())
        );
      } else {
        this.courseServ.filteredCourses = this.courseServ.courses;
      }
    }
    if (this.filter == 'status') {
      console.log('onInput', this.inputFilter);
      if (this.inputFilter !== '' || undefined) {
        this.courseServ.filteredCourses = this.courseServ.courses.filter(p => p.status.toUpperCase().includes(this.inputFilter.toUpperCase()));
      } else {
        this.courseServ.filteredCourses = this.courseServ.courses;
      }
    }
  }
}
