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
  @Output() notify: EventEmitter<object> = new EventEmitter<object>();

  constructor() {}
  ngOnInit() {}

  /// Форматирует любой параметр с типом Date в string и передает в 
  ///функцию(обработчик событий) контекста род.класса
  setFormatFor(date:Date){
    const dayFrom = date.getDate();
    const monthFrom = date.getMonth() + 1;
    const yearFrom = date.getFullYear();
    const resultDate = yearFrom + '-' + monthFrom + "-" + dayFrom ;
    this.notify.emit({date: resultDate, fieldName: this.fieldName});
  }
}
