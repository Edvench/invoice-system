import {Routes } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
import { TaskComponent } from '../Task/task.component';
import { CreateTaskComponent } from '../Task/create-task/create-task.component';

export const Rout : Routes = [
    {path:"",redirectTo: "invoice",pathMatch:"full"},//Home page
    {path:"invoice",component:InvoiceComponent},
    {path:"task",component:TaskComponent},
    {path:"createTask",component: CreateTaskComponent}
  ]