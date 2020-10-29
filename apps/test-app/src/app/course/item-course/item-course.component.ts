import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../Models/Course.Model';

@Component({
  selector: 'recrutation-fullstack-item-course',
  templateUrl: './item-course.comp.html',
  styleUrls: ['./item-course.component.scss']
})
export class ItemCourseComponent implements OnInit {

  public course: Course;
  public courseId;
  constructor(
    private route: ActivatedRoute,
    public courseServ: CourseService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.courseServ.getCourse(this.courseId);
    console.log(this.courseId);
    console.log(this.course);
  }

}
