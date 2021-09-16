import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffModuleComponent } from './staff-module.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: StaffModuleComponent,
    children: [
      {path : "dashboard", component : DashboardComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffModuleRoutingModule { }
