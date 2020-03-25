import { Component, OnInit, Input, Injectable, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DatePickerComponent implements OnInit {
  @Input() fieldName:string;
  @Input() dataFromInput:Date;
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();///Обработчик событий(вы-
  //зывает функцию в род. компоненте)

  constructor() {}
  ngOnInit() {}

  /// Форматирует любой параметр с типом Date в string и передает в 
  ///функцию(обработчик событий) контекста род.класса
  convertDataToString(dateObjectValue:Date){
    const dayFrom = dateObjectValue.getDate();
    const monthFrom = dateObjectValue.getMonth() + 1;
    const yearFrom = dateObjectValue.getFullYear();
    const resultDate = yearFrom + '-' + monthFrom + "-" + dayFrom ;
    console.log({date: resultDate, fieldName: this.fieldName})
    this.notify.emit({date: resultDate, fieldName: this.fieldName});
  }
}
