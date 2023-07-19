import { Component, OnInit } from '@angular/core';
import { Stubusrecord } from '../stubusrecord';
import { StubusrecordService } from '../stubusrecord.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentRecords:Stubusrecord ={
    id: 0,
    name: '',
    school: '',
    mobile: '',
    email: '',
    location: '',
    totalAmount:0,
    receivedAmount:0,
    remeningAmount:0
  }
  constructor(private stu:StubusrecordService, private router:Router){}

  ngOnInit(): void{

  }

  addRecords(){
    this.stu.create(this.studentRecords).subscribe(()=>{
      this.router.navigate(["/"])
    })
  }

}
