import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder,FormArray } from '@angular/forms';
import { TaskService } from 'src/app/Services/task-service';
import { Task } from 'src/app/Entity/task';
import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  moduleId: module.id,
  selector: 'app-create-task',
  templateUrl: 'create-task.component.html',
  styleUrls: ['create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  private validDate: string;
  private formGroup: FormGroup;
 
  constructor(
    private taskService: TaskService,
    private formBuilder:FormBuilder,
    private task:Task,
    private datePicker:DatePickerComponent) {
    this.formGroup = formBuilder.group({
      raidControl:            ["", [
                                Validators.required,
                                Validators.pattern('^[0-9]+$')
                              ]],
      titleControl:           ["", [ Validators.required]],
      descriptionControl:     ["", [ Validators.required]],
      dataControl:            this.formBuilder.array([this.formBuilder.control('')])
    })
    
  }

  ngOnInit() { }

  setTaskObject(money: number, title: string, desc: string, date: string) {
    this.task.money = money;
    this.task.title = title;
    this.task.description = desc;
    this.task.dateOfTask = date;
    return this.task;
  }

  // setFormatForData(data: Date) {
  //   const day = data.getDate();
  //   const month = data.getMonth() + 1;
  //   const year = data.getFullYear();
  //   this.validDate = year + '-' + month + "-" + day;
  //   return this.validDate;
  // }

  getDataFromDatePicker(params):string {
    this.validDate = params.date;
    return this.validDate; 
  }

  public addTask() {
    console.log(this.formGroup.controls["dataControl"].value)
    this.setTaskObject(
      this.formGroup.controls["raidControl"].value,
      this.formGroup.controls["titleControl"].value,
      this.formGroup.controls["descriptionControl"].value,
      this.validDate)
    this.taskService.createTaskRequest(this.task).subscribe((response: any) => { console.log(response) });
    console.log(this.validDate);
  }

}
