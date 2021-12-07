import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'position',
    loadChildren: () => import('./position/position.module').then(module => module.PositionModule)
  },
  {
    path: 'education-degree',
    loadChildren: () => import('./education-degree/education-degree.module').then(module => module.EducationDegreeModule)
  },
  {
    path: 'division',
    loadChildren: () => import('./division/division.module').then(module => module.DivisionModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: 'customer-type',
    loadChildren: () => import('./customer-type/customer-type.module').then(module => module.CustomerTypeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
