import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UploadModule } from './invoice/upload/upload.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Rout } from './Routing/rout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {MatSelectModule} from '@angular/material/select'

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component'
import { TaskComponent } from './Task/task.component';
import { CreateTaskComponent } from './Task/create-task/create-task.component';
import { DatePickerComponent } from './Entity/date-picker/date-picker.component';

import {InvoiceService} from './Services/invoice-service';
import { TaskService } from './Services/task-service';
import {InvoceRequest} from './Entity/invoice-request';
import { Task } from './Entity/task';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    TaskComponent,
    CreateTaskComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UploadModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule.forRoot(Rout)
    
  ],
  providers: [
    InvoiceService,
    InvoceRequest,
    TaskService,
    DatePickerComponent,
    Task
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
