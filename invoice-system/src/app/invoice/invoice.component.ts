import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from '../Services/invoice-service';
import { RaidComponent } from './raid/raid.component';
import { DialogComponent } from './upload/dialog/dialog.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from '../Services/upload.service';
import { GetFileService } from '../Services/get-file.service';
import { InvoceRequest } from '../Entity/invoice-request';

@Component({
  moduleId:module.id,
  selector: 'app-invoice',
  templateUrl: 'invoice.component.html',
  styleUrls: ['invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @ViewChild(RaidComponent, {static: false})
  private raidComponent: RaidComponent;///Получили дочерний компонент в родительском

  constructor(
    private invoiceService:InvoiceService,
    private fileService:GetFileService
  ) { }

  request: InvoceRequest = new InvoceRequest;


  ngOnInit() {
  }

  public file :Set<File>;
  public money: number;

//   submit(){
//     this.invoiceService.postData()
// }



  public getInvoice(){
  console.log(this.raidComponent.moneyFromInput,this.fileService.getFile());
  this.request.money = this.raidComponent.moneyFromInput;
  this.request.file = this.fileService.getFile();
  console.log(this.request.file);
  this.invoiceService.createRequest(this.request.money,this.request.file);
  this.invoiceService.postData().subscribe();;
  }

}
