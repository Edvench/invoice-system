import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import {InvoceReques} from '../invoice-request';
import {InvoiceService} from '../invoice-service'


@Component({
  selector: 'app-raid-input',
  templateUrl: './raid-input.component.html',
  styleUrls: ['./raid-input.component.css']
})
export class RaidInputComponent implements OnInit {
  // @ViewChild('moneyFromInput', { static: false }) moneyFromInput;
  request: InvoceReques = new InvoceReques;///Money anf File from Request
//   receivedRequest:InvoceReques;///полученный Request
//   done: boolean = false;


   constructor(
     private invoiceService:InvoiceService,
     ) { }
//   submit( request: InvoceReques){
//     this.invoiceService.postData(request)
//             .subscribe(
//                 (data: InvoceReques) => {this.receivedRequest=data; this.done=true;},
//                 error => console.log(error)
//             );
// }
  ngOnInit() {
    
  }

  public getMoney(money:number){
    money = this.request.money;
  //  this.raidService.getMoney(this.request.money);///Вызываем метод getMoney нашего сервиса(в шаблоне напряму
  //  //вызывать методы сервиса нельзя).Передаем в нее наши деньги,а в сервисе принимаем и сохраняем
   this.invoiceService.postData(this.request.money);
  }
}
