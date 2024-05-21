import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/Model/Employee.model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[] = [];

    constructor(private employeeservice :EmployeeService ,private toastr: ToastrService) {}
  ngOnInit(): void {
    this.employeeservice.getAllEmployees()
    .subscribe({
      next: (employees) => {
         console.log(employees);
          //to print the data from array in inspection tab 
          this.employees = employees;
          this.toastr.success('Employee details loaded successfully!', 'Success');
      },
      error: (response) => {
          console.log(response);
          this.toastr.error('Failed to load employee details.', 'Error');
      }
      // error: (error) => {
      //   console.error('Error fetching employees:', error);
      // },


    })
  }


}
