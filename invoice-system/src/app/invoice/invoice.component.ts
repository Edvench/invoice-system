import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from '../Services/invoice-service';
import { FormatFileService } from '../Services/formatFile.service';
import { InvoceRequest } from '../Entity/invoice-request';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../Services/upload.service';

@Component({
  moduleId:module.id,
  selector: 'app-invoice',
  templateUrl: 'invoice.component.html',
  styleUrls: ['invoice.component.css',
               '../Styles/global.scss']
})
export class InvoiceComponent implements OnInit {
  private request: InvoceRequest = new InvoceRequest;
  private file :Set<File>;
  private formGroup:FormGroup;
  private validDate: string;
  private sheettNameResponce:any;

  constructor(
    private invoiceService:InvoiceService,
    private fileService:FormatFileService,
    private uploadService:UploadService,
    private router: Router,
    private fb:FormBuilder
  ) { 
    this.formGroup = fb.group({
      raidControl:            ["", [
        Validators.required,
        Validators.pattern('^[0-9]{1,9}$')
      ]],
      firstNameControl:           ["", [ Validators.required]],
      lastNameControl:     ["", [ Validators.required]],
      cityControl:     ["", [ Validators.required]],
      indexNameControl:     ["", [ Validators.required,
                                   Validators.pattern('^[0-9]{1,9}$')]],
      countryControl:     ["", [ Validators.required]],
      emailControl:     ["", [ Validators.required,
                               Validators.email]],
      telephoneNumberControl:     ["", [ Validators.required,
                                         Validators.pattern('^[0-9]{12}$')]],
      streetControl:     ["", [ Validators.required]],
      buildNumberControl:     ["", [ Validators.required]],
      descriptionControl:     ["", [ Validators.required]],
      sheetTabNameControl:     ["", [ Validators.required]]
    })
  }

  ngOnInit() { }

  goTaskComponent() {
    this.router.navigate(['task']);
  }

  getDataFromDatePicker(params):string {
    this.validDate = params.date;
    return this.validDate; 
  }

  public getInvoice(){
    this.request.file = this.fileService.getFile();
    this.invoiceService.postData(
      this.formGroup.controls["raidControl"].value,
      this.formGroup.controls["firstNameControl"].value,
      this.formGroup.controls["lastNameControl"].value,
      this.formGroup.controls["streetControl"].value,
      this.formGroup.controls["buildNumberControl"].value,
      this.formGroup.controls["indexNameControl"].value,
      this.formGroup.controls["cityControl"].value,
      this.formGroup.controls["countryControl"].value,
      this.formGroup.controls["emailControl"].value,
      this.formGroup.controls["telephoneNumberControl"].value,
      this.formGroup.controls["descriptionControl"].value,
      this.validDate,
      this.formGroup.controls["sheetTabNameControl"].value,
      
      ).subscribe(
      (response: any) => {
        const blob = new Blob([response],{ type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const url  = window.URL.createObjectURL(blob);
        window.open(url);
      }
    );
  }

  public sheetName():any{
    this.sheettNameResponce = this.uploadService.sheetNames;
    return this.sheettNameResponce
  }
}
