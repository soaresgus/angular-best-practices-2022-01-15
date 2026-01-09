import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Course } from 'src/app/features/courses/course';
import { CoursesService } from 'src/app/features/courses/courses.service';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCourseComponent),
      multi: true
    }
  ]
})
export class SelectCourseComponent implements OnInit, ControlValueAccessor {

  value: number | undefined;
  courses: Course[] = [];

  onChange!: (value: number) => void
  onTouched!: () => void;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  writeValue(value: number): void {
    this.value = value || undefined;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChangeCourse(course: number) {
    this.onTouched();
    this.onChange(course)
  }

  private loadCourses() {
    this.coursesService.findAll().subscribe(response => {
      this.courses = response;
    });
  }

}
