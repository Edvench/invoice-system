import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import {InvoiceService} from 'src/app/Services/invoice-service'


@Component({
  moduleId:module.id,
  selector: 'app-raid',
  templateUrl: 'raid.component.html',
  styleUrls: ['raid.component.css']
})
export class RaidComponent implements OnInit {
  @Input() moneyFromInput:number;///Свойство компонента,в которое записываетcя значение с интупа

   constructor(
     private invoiceService:InvoiceService,
     ) { }

  ngOnInit() {
    
  }

 
}
