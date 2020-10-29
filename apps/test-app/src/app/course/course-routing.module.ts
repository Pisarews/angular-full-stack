import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { ItemCourseComponent } from './item-course/item-course.component'

const routes: Routes = [
  {path: 'courses/:id', component: ItemCourseComponent},
  {path: 'courses', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
