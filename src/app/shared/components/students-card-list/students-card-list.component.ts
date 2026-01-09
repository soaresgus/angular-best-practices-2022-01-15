import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/features/students/student';

@Component({
  selector: 'app-students-card-list',
  templateUrl: './students-card-list.component.html',
  styleUrls: ['./students-card-list.component.css']
})
export class StudentsCardListComponent implements OnInit {

  @Input() students!: Student[];

  constructor() { }

  ngOnInit(): void {
  }

  trackByStudentId(index: number, student: Student): number {
    return student.id;
  }
}
