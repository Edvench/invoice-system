import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from '../Services/invoice-service';
import { RaidComponent } from './raid/raid.component';
import { GetFileService } from '../Services/get-file.service';
import { InvoceRequest } from '../Entity/invoice-request';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'app-invoice',
  templateUrl: 'invoice.component.html',
  styleUrls: ['invoice.component.css',
               '../Styles/global.scss']
})
export class InvoiceComponent implements OnInit {
  @ViewChild(RaidComponent, {static: false})
  private raidComponent: RaidComponent;///Получили дочерний компонент в родительском
  private request: InvoceRequest = new InvoceRequest;
  public file :Set<File>;
  public money: number;

  constructor(
    private invoiceService:InvoiceService,
    private fileService:GetFileService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goTaskComponent() {
    this.router.navigate(['task']);
  }

  public getInvoice(){
    console.log(this.raidComponent.moneyFromInput,this.fileService.getFile());
    this.request.money = this.raidComponent.moneyFromInput;
    this.request.file = this.fileService.getFile();
    this.invoiceService.postData(this.request.money).subscribe(
      (response: any) => {
        const blob = new Blob([response],{ type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const url  = window.URL.createObjectURL(blob);
        window.open(url);
      }
    );
  }
}
