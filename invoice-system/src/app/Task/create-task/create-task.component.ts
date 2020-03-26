import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { TaskService } from 'src/app/Services/task-service';
import { Task } from 'src/app/Entity/task';

@Component({
  moduleId: module.id,
  selector: 'app-create-task',
  templateUrl: 'create-task.component.html',
  styleUrls: ['create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  private validDate: string;
  private formGroup: FormGroup;
  // private task: Task = new Task();

  constructor(
    private taskService: TaskService,
    private formBuilder:FormBuilder,
    private task:Task) {
    this.formGroup = formBuilder.group({
      "raidControl": ["", [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      "titleControl": ["", [ Validators.required]],
      "descriptionControl": ["", [ Validators.required]],
      "dataControl": ["", [ Validators.required]],
    })
  }

  ngOnInit() { }


  setTaskObject(money: number, title: string, desc: string, date: Date) {
    this.task.money = money;
    this.task.title = title;
    this.task.description = desc;
    this.task.dateOfTask = this.setFormatForData(date);
    return this.task;
  }

  setFormatForData(data: Date) {
    const day = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();
    this.validDate = year + '-' + month + "-" + day;
    return this.validDate;
  }

  public addTask() {
    this.setTaskObject(
      this.formGroup.controls["raidControl"].value,
      this.formGroup.controls["titleControl"].value,
      this.formGroup.controls["descriptionControl"].value,
      this.formGroup.controls["dataControl"].value)
    this.taskService.createTaskRequest(this.task).subscribe((response: any) => { console.log(response) });
    console.log(this.validDate);
  }
}
