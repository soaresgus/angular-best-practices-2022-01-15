import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { FormsModule } from '@angular/forms';
import { StudentsCardListComponent } from './components/students-card-list/students-card-list.component';
import { AgePipe } from './pipes/age.pipe';
import { ShortNamePipe } from './pipes/short-name.pipe';
import { SelectCourseComponent } from './components/select-course/select-course.component';


@NgModule({
  declarations: [
    CourseCardListComponent,
    StudentsCardListComponent,
    AgePipe,
    ShortNamePipe,
    SelectCourseComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseCardListComponent,
    StudentsCardListComponent,
    AgePipe,
    ShortNamePipe,
    SelectCourseComponent
  ]
})
export class SharedModule { }
