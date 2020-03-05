import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import {InvoceReques} from 'src/app/invoice-request';
import {InvoiceService} from 'src/app/invoice-service'


@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css']
})
export class RaidComponent implements OnInit {
  @Input() moneyFromInput:number;///Свойство компонента,в которое записываетcя значение с интупа

   constructor(
     private invoiceService:InvoiceService,
     ) { }

  ngOnInit() {
    
  }

 
}
