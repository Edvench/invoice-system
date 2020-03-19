import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { TaskService } from 'src/app/Services/task-service';

@Component({
  moduleId:module.id,
  selector: 'app-create-task',
  templateUrl: 'create-task.component.html',
  styleUrls: ['create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  @Input() moneyFromInput:number;///Свойство компонента,в которое записываетcя значение с интупа
  @Input() titleFromInput:string;
  @Input() descriptionFromInput:string;
  @Input() dateFromInput:Date = new Date();

  validDate:string;

  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^\d{1,}$"),
  ]);

  matcher = new ErrorStateMatcher();

  constructor(private taskService:TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() { }

  formatData(data:Date){
    const day = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();
    
    this.validDate = year + '-' + month + "-" + day;
    // console.log(this.validDate);
    return this.validDate ;
}

  public getTask(){
    this.formatData(this.dateFromInput);
    this.taskService.postData(
      this.moneyFromInput,
      this.titleFromInput,
      this.descriptionFromInput,
      this.validDate,
    ).subscribe((response: any) => {console.log(response)});
    console.log(this.validDate);
  }
}
