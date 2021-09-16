import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffModuleRoutingModule } from './staff-module-routing.module';
import { StaffModuleComponent } from './staff-module.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';


@NgModule({
  declarations: [
    StaffModuleComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    StaffModuleRoutingModule
  ]
})
export class StaffModuleModule { }
