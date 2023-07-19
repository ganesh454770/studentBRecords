import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stubusrecord } from './stubusrecord';

@Injectable({
  providedIn: 'root'
})
export class StubusrecordService {

  constructor(private http:HttpClient) { }

  //get all records
  getAll():Observable<Stubusrecord[]>{
    return this.http.get<Stubusrecord[]>("http://localhost:3000/Stubusrecords");
  }

  //add records
  create(payload:Stubusrecord):Observable<Stubusrecord>{
    return this.http.post<Stubusrecord>("http://localhost:3000/Stubusrecords", payload)
  }

 //add all records by id
 getbyId(id: number): Observable<Stubusrecord> {
   return this.http.get<Stubusrecord>(`http://localhost:3000/Stubusrecords/${id}`);
 }

 //update Records
 update(payload:Stubusrecord):Observable<Stubusrecord>{
  return this.http.post<Stubusrecord>(`http://localhost:3000/Stubusrecords/${payload.id}`, payload)
}
 
}
