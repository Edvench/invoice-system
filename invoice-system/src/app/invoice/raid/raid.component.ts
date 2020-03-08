import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import {InvoiceService} from 'src/app/Services/invoice-service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  moduleId:module.id,
  selector: 'app-raid',
  templateUrl: 'raid.component.html',
  styleUrls: ['raid.component.css']
})
export class RaidComponent implements OnInit {
  @Input() moneyFromInput:number;///Свойство компонента,в которое записываетcя значение с интупа
  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^\d{1,}$"),
  ]);

  matcher = new ErrorStateMatcher();

   constructor(
     private invoiceService:InvoiceService,
     ) { }

  ngOnInit() {
  }

  onTitleChange(money){
    money = this.moneyFromInput;
    if(money!= Number)
        money = "неизвестно";
    return money;
  }
  

 
}
