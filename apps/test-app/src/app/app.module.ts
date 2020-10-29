import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseModule} from "./course/course.module";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CourseModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {}
