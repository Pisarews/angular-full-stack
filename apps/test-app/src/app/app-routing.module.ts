import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: '', component:AppComponent },
  { path: 'courses', component: AppComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
