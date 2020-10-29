import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCourseComponent } from './item-course.component';
import { CourseRoutingModule } from '../course-routing.module';

@NgModule({
  declarations: [ItemCourseComponent],
  imports: [CommonModule, CourseRoutingModule, ItemCourseComponent],
  exports: [ItemCourseComponent]
})
export class ItemCourseModule {}
