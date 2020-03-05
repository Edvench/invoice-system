import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadModule } from './invoice/upload/upload.module';
import {MatInputModule} from '@angular/material/input';
import { RaidComponent } from '../app/invoice/raid/raid.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InvoiceService} from './invoice-service';
import { InvoiceComponent } from './invoice/invoice.component'
import {InvoceReques} from './invoice-request'



@NgModule({
  declarations: [
    AppComponent,
    RaidComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    UploadModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    InvoiceService,
    InvoceReques
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
