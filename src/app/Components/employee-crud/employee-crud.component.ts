import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/Model/Employee.model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit{

  addEmployeeRequest : Employee = {
    id: '',
    name: '',
    gender: '',
    email: '',
    department: '',
    phone: 0,
    salary: 0
  }

  constructor(private employeeservice :EmployeeService , private router :Router , private toastr: ToastrService) 
  {


  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  addEmployee() {
   //console.log(this.addEmployeeRequest)
   this.employeeservice.addEmployee(this.addEmployeeRequest).
   subscribe({

    next:(employee)=> {
      this.toastr.success('Employee added successfully!', 'Success');
       this.router.navigate(['employees']);
    },
    error:(response) => {
      this.toastr.error('Failed to add employee.', 'Error');
        console.log(response)
    },
   })
  }

}
