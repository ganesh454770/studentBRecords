import { Component, OnInit } from '@angular/core';
import { Stubusrecord } from '../stubusrecord';
import { StubusrecordService } from '../stubusrecord.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  allStubusrecords: Stubusrecord[] = [];
  displayedColumns: string[] = ['id', 'name', 'school', 'mobile', 'email', 'location', 'totalAmount', 'receivedAmount', 'remeningAmount', 'action'];


  constructor(private stubusrecord: StubusrecordService) { }

  ngOnInit(): void {
    this.getAllStubusrecords();
  }

  getAllStubusrecords() {
    this.stubusrecord.getAll().subscribe((data) => {
      this.allStubusrecords = data;
      console.log(this.allStubusrecords);
    })
  }

}
