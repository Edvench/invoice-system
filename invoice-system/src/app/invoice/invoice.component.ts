import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from '../invoice-service';
import { RaidComponent } from './raid/raid.component';
import { DialogComponent } from './upload/dialog/dialog.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';
import { GetFileService } from '../get-file.service';
import { InvoceReques } from '../invoice-request';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @ViewChild(RaidComponent, {static: false})
  private raidComponent: RaidComponent;///Получили дочерний компонент в родительском

  constructor(
    private invoiceService:InvoiceService,
    private fileService:GetFileService
  ) { }

  request: InvoceReques = new InvoceReques;


  ngOnInit() {
  }

  public file :Set<File>;
  public money: number;

  public getInvoice(){
  console.log(this.raidComponent.moneyFromInput,this.fileService.getFile());
  this.request.money = this.raidComponent.moneyFromInput;
  this.request.file = this.fileService.getFile();
  this.invoiceService.createRequest(this.request.money,this.request.file);
  this.invoiceService.postData();
  }

}
