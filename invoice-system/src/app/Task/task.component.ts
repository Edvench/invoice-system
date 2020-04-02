import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task-service';
import { Task } from '../Entity/task';
import { DatePickerComponent } from '../Entity/date-picker/date-picker.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss',
    '../Styles/global.scss']
})
export class TaskComponent implements OnInit {

  private validDateFrom: string = "";
  private validDateTo: string = "";
  private tasks: Task[] = [];
  private currentPageNumber: number;
  private fullResponce: any;
  private apiEndPoint: string;
  private formGroup: FormGroup;

  constructor(private http: HttpClient,
    private router: Router,
    private taskService: TaskService,
    private picker: DatePickerComponent,
    private formBuilder:FormBuilder) 
  {
    this.apiEndPoint = environment.domainUrl;
    this.formGroup = formBuilder.group({
      titleFromSearchControl:            [""]});  
  }

  ngOnInit() {
  }

  private viewTasks(currentPage: number):void {
    this.currentPageNumber = currentPage + 1;
    if (this.currentPageNumber == 1) {
      this.tasks = [];
      this.taskService.getTasks(this.currentPageNumber,this.validDateFrom, this.validDateTo,this.formGroup.controls["titleFromSearchControl"].value).subscribe(
        response => {
          this.fullResponce = response;
          response.collection.forEach(element => {
            this.tasks.push(element);
          });
          console.log(this.fullResponce);
          console.log(this.tasks)
        });
    }

    else {
      this.taskService.getTasks(this.currentPageNumber,this.validDateFrom, this.validDateTo,this.formGroup.controls["titleFromSearchControl"].value).subscribe(
        response => {
          this.fullResponce = response;
          response.collection.forEach(element => {
            this.tasks.push(element);
          });
          console.log(this.fullResponce);
          console.log(this.tasks)
        });
        ///For clear datepicker control
        // if(this.validDateFrom&&this.validDateTo !=""){
        //   this.validDateFrom = "";
        //   this.validDateTo = "";
        // }
    }
  }

  private getDate(params):void {
    if (params.fieldName === 'validDateFrom') {
      this.validDateFrom = params.date;
    } 
    
    else if (params.fieldName === 'validDateTo') {
      this.validDateTo = params.date;
    }
  }

  private reddirectCreateTaskComponent() {
    this.router.navigate(['createTask']);
  }
}
