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



@NgModule({
  declarations: [
    AppComponent,
    RaidComponent,
    InvoiceComponent
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
    RouterModule.forRoot(Rout)
  ],
  providers: [
    InvoiceService,
    InvoceRequest
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
