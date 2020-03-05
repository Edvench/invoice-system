import {Routes } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';

export const Rout : Routes = [
    {path:"",redirectTo: "invoice",pathMatch:"full"},//Home page
    {path:"invoice",component:InvoiceComponent},
  ]