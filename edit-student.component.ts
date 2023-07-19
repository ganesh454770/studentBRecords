import { Component, OnInit } from '@angular/core';
import { Stubusrecord } from '../stubusrecord';
import { ActivatedRoute } from '@angular/router';
import { StubusrecordService } from '../stubusrecord.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentRecords: Stubusrecord = {
    id: 0,
    name: '',
    school: '',
    mobile: '',
    email: '',
    location: '',
    totalAmount: 0,
    receivedAmount: 0,
    remeningAmount: 0
  }
  constructor(private stu: StubusrecordService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'))
      this.getById(id)
    })
  }
  getById(id: number) {
    this.stu.getbyId(id).subscribe((data) => {
      this.studentRecords = data;
    })
  }
}