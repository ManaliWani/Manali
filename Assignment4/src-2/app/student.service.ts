import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';  
import { IStudents } from './Students';  
import { Observable } from 'rxjs';

@Injectable({   
  providedIn: 'root' 
})
export class StudentsService 
{
  // Add dependency in service constructor for httpclient 
  constructor(private http:HttpClient) 
 {
 }

  private _url:string = "/assets/Data/Students.json"; 
 
GetStudentDetails():Observable<IStudents[]> 
{
  return this.http.get<IStudents[]>(this._url); 
}

}


