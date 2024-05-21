import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/Model/Employee.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http :HttpClient) {
    
   }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/Employee');
  }
  addEmployee(addEmployeeRequest : Employee):Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(this.baseApiUrl + 'api/Employee' , addEmployeeRequest);
  }

  getEmployeeById(id:string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + 'api/Employee/' + id );
  }

  upadteemplyeebyid(id:string , employeeupdate :Employee ) : Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + 'api/Employee/' + id , employeeupdate );

  }

  deleteemployeebyid(id:string):Observable<Employee> {
  return this.http.delete<Employee>(this.baseApiUrl + 'api/Employee/' + id);
  }
}
