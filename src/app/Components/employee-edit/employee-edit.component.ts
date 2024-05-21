  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
  import { Employee } from 'src/Model/Employee.model';
  import { EmployeeService } from 'src/app/Services/employee.service';

  @Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
  })
  export class EmployeeEditComponent implements OnInit {



    EmployeeDetails: Employee = {
      id: '',
      name: '',
      gender: '',
      email: '',
      department: '',
      phone: 0,
      salary: 0
    };
    constructor( private route:ActivatedRoute , private  employeeservice :EmployeeService , private router :Router ,private toastr: ToastrService) {

    }

    ngOnInit(): void {
      //throw new Error('Method not implemented.');
      this.route.paramMap.subscribe({
        next:(params)=> {
            const id = params.get('id');

            if (id) {
              //call api 
              this.employeeservice.getEmployeeById(id).subscribe({
                next: (employee) => {
                  this.EmployeeDetails = employee;
                },
                // error: (err) => {
                //   console.error('Error fetching employee details', err);
                // }
              });
            }
        },
      });
    }

    updateempl(){
      this.employeeservice.upadteemplyeebyid(this.EmployeeDetails.id , this.EmployeeDetails)
      .subscribe ({
        next: (response) =>{
          this.toastr.success('Employee updated successfully!', 'Success');
          this.router.navigate(['employees']);
        },
        error: (error) => {
          this.toastr.error('Failed to update employee.', 'Error');
        }
      })
    }


    delempl(id: string) {
      this.employeeservice.deleteemployeebyid(id)
      .subscribe({
        next:(response)=> {
          this.toastr.success('Employee deleted successfully!', 'Success');
          this.router.navigate(['employees']);
        },
      error: (error) => {
        this.toastr.error('Failed to update employee.', 'Error');
      }
      });
      }

  }
