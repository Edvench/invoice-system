import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import {InvoceReques} from 'src/app/invoice-request';
import {InvoiceService} from 'src/app/invoice-service'


@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css']
})
export class RaidComponent implements OnInit {
  request: InvoceReques = new InvoceReques;///Money anf File from Request
  @Input() moneyFromInput:number;///Свойство компонента,в которое записываетчя значение с интупа

   constructor(
     private invoiceService:InvoiceService,
     ) { }

  ngOnInit() {
    
  }

 
}
