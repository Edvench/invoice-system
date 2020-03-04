import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import {MatInputModule} from '@angular/material/input';
import { RaidInputComponent } from './raid-input/raid-input.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InvoiceService} from './invoice-service'



@NgModule({
  declarations: [
    AppComponent,
    RaidInputComponent
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
    InvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
