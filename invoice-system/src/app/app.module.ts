import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadModule } from './invoice/upload/upload.module';
import {MatInputModule} from '@angular/material/input';
import { RaidComponent } from '../app/invoice/raid/raid.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InvoiceService} from './Services/invoice-service';
import { InvoiceComponent } from './invoice/invoice.component'
import {InvoceRequest} from './Entity/invoice-request'
import { RouterModule } from '@angular/router';
import { Rout } from './Routing/rout';
import { TaskComponent } from './Task/task.component';
import { CreateTaskComponent } from './Task/create-task/create-task.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import { TaskService } from './Services/task-service';
import { TaskRequest } from './Entity/task-request';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DatePickerComponent } from './Task/date-picker/date-picker.component';
import { Task } from './Entity/task';



@NgModule({
  declarations: [
    AppComponent,
    RaidComponent,
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
    NgxDaterangepickerMd.forRoot(),
    RouterModule.forRoot(Rout)
    
  ],
  providers: [
    InvoiceService,
    InvoceRequest,
    TaskService,
    TaskRequest,
    DatePickerComponent,
    Task
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
