import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { EmployeeCrudComponent } from './Components/employee-crud/employee-crud.component';
import { EmployeeEditComponent } from './Components/employee-edit/employee-edit.component';

const routes: Routes = [

  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'employees',
    component : EmployeeListComponent
  },
  {
    path:'update',
    component : EmployeeCrudComponent
  },
  { 
    path:'edit/:id',
    component : EmployeeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
