import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from '../invoice-service';
import { RaidComponent } from './raid/raid.component';
import { DialogComponent } from './upload/dialog/dialog.component';
import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @ViewChild(RaidComponent, {static: false})
  private raidComponent: RaidComponent;///Получили дочерний компонент в родительском

  @ViewChild(UploadComponent, {static: false})
  private uploadComponent: UploadComponent;

  constructor(
    private invoiceService:InvoiceService
  ) { }

  ngOnInit() {
  }

  public file :Set<File>;
  public money: number;

  public getMoney(){
  console.log(this.raidComponent.moneyFromInput);
  }

}
