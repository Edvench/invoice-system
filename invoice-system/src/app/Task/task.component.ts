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

  // @Input() private titleFromSearch: string;
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
    private formBuilder:FormBuilder) {
    this.apiEndPoint = environment.domainUrl;
    this.formGroup = formBuilder.group({
      titleFromSearchControl:            [""]})
  }

  ngOnInit() {

  }

  goCreateTaskLink() {
    this.router.navigate(['createTask']);
  }

  getTasksResponce(currentPage: number): any {
    this.currentPageNumber = currentPage + 1;
    if (this.currentPageNumber == 1) {
      this.tasks = [];
      this.taskService.getTasks(this.currentPageNumber,this.validDateFrom, this.validDateTo).subscribe(
        response => {
          this.fullResponce = response;
          response.collection.forEach(element => {
            this.tasks.push(element);
          });
          console.log(this.fullResponce);
          console.log(this.tasks)
          return this.fullResponce
        });
    }
    else{
      this.taskService.getTasks(this.currentPageNumber,this.validDateFrom, this.validDateTo).subscribe(
        response => {
          this.fullResponce = response;
          response.collection.forEach(element => {
            this.tasks.push(element);
          });
          console.log(this.fullResponce);
          console.log(this.tasks)
          return this.fullResponce
        });
    }
  }

  onNotify(params): void {
    if (params.fieldName === 'validDateFrom') {
      this.validDateFrom = params.date;
    } else if (params.fieldName === 'validDateTo') {
      this.validDateTo = params.date;
    }
  }

  getFilterTasksResponce(title: string) {
    this.formGroup.controls["titleFromSearchControl"].setValue(title);
    if (this.formGroup.controls["titleFromSearchControl"].value != null) {
      this.taskService.getTasksFromFilter(this.formGroup.controls["titleFromSearchControl"].value).subscribe(
        response => {
          this.fullResponce = response;
          response.collection.forEach(element => {
            this.tasks.splice(0, this.tasks.length, element);
          });
          console.log(this.tasks);
        });
    }
  }
}
