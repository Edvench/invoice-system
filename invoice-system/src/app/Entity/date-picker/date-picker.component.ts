import { Component, OnInit, Input, Injectable, EventEmitter, Output } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DatePickerComponent implements OnInit {

  @Input() fieldName:string;///кастомный параметр для имя поля(определ.в task.component как dataFrom DatatTO)
  @Output() notifyDatePicker: EventEmitter<object> = new EventEmitter<object>();///Обработчик событий(вы-
                                                                                //зывает функцию в род. компоненте)
  private formGroup: FormGroup;

  constructor( private formBuilder:FormBuilder) {
    this.formGroup = formBuilder.group({
      "dataControl": ["", [ Validators.required]],
    })
  }
  ngOnInit() {}

  /// Форматирует любой параметр с типом Date в string и передает в 
  ///функцию(обработчик событий) контекста род.класса
  private convertDataToString(dateObjectValue:Date){
    const dayFrom = dateObjectValue.getDate();
    const monthFrom = dateObjectValue.getMonth() + 1;
    const yearFrom = dateObjectValue.getFullYear();
    const resultDate = yearFrom + '-' + monthFrom + "-" + dayFrom ;
    this.notifyDatePicker.emit({date: resultDate, fieldName: this.fieldName});
  }
}
