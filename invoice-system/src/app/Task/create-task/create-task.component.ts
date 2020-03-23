import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { TaskService } from 'src/app/Services/task-service';
import { Task } from 'src/app/Entity/task';

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

  task:Task = new Task();
  validDate:string;

  validation = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
  ]);

  matcher = new ErrorStateMatcher();

  constructor(private taskService:TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() { }


setTaskObject(money:number, title:string, desc:string, date:Date){
  this.task.money = money;
  this.task.title = title;
  this.task.description = desc;
  this.task.dateOfTask =  this.setFormatForData(date);

  console.log(this.task)
  return this.task;
}

setFormatForData(data:Date){
  const day = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  
  this.validDate = year + '-' + month + "-" + day;
  // console.log(this.validDate);
  return this.validDate ;
}

  public addTask(){
    this.setTaskObject(this.moneyFromInput,
      this.titleFromInput,
      this.descriptionFromInput,
      this.dateFromInput,)
    this.taskService.createTaskRequest(this.task).subscribe((response: any) => {console.log(response)});
    console.log(this.validDate);
  }
}
