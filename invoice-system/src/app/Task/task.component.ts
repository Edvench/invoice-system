import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task-service';
import { Task } from '../Entity/task';
import { Moment } from 'moment';
import { DatePickerComponent } from './date-picker/date-picker.component';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {

  // @Input() selected: {start: Moment, end: Moment};
  // validDateFrom:string;
  // validDateTo:string;
  dateFromInput: string;
  dateTo: string;

  tasks: Task[] = [];
  currentPageNumber: number;
  fullResponce: any;
  @Input() titleFromSearch: string;

  private apiEndPoint: string;


  constructor(private http: HttpClient,
    private router: Router,
    private taskService: TaskService,
    private picker: DatePickerComponent
  ) {
    this.apiEndPoint = environment.domainUrl;
  }

  ngOnInit() {

  }

  goCreateTaskLink() {
    this.router.navigate(['createTask']);
  }

  getTasksResponce(currentPage: number): any {
    this.currentPageNumber = currentPage + 1;
    this.taskService.getMoreTasksResponce(this.currentPageNumber).subscribe(
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

  getFilterTasksResponce(title: string) {
    this.titleFromSearch = title;
    if (this.titleFromSearch != null) {
      this.taskService.getTasksFromFilter(this.titleFromSearch).subscribe(
        response => {
          this.fullResponce = response;
          response.collection.forEach(element => {
            this.tasks.splice(0, this.tasks.length, element);
          });
          console.log(this.tasks);
        });
    }
  }



  setFormatFor(dataFrom: Date) {
    // const dayFrom = dataFrom.getDate();
    // const monthFrom = dataFrom.getMonth() + 1;

    // const yearFrom = dataFrom.getFullYear();


    // this.validDateFrom = yearFrom + '-' + monthFrom + "-" + dayFrom ;
    // console.log(this.validDateFrom)
    // this.validDateFrom = this.picker.setFormatFor(dataFrom);

    // return this.validDateFrom;
  }

  setFormatTo(dataTo: Date) {
    // const dayTo = dataTo.getDate();
    // const monthTo = dataTo.getMonth() + 1;
    // const yearTo = dataTo.getFullYear();

    // this.validDateTo = yearTo + '-' + monthTo + "-" +dayTo ;
    // console.log(this.validDateTo)
    // this.validDateTo = this.picker.setFormatFor(dataTo);
    // return this.validDateTo;
  }

  onNotify(params):void {
    if (params.fieldName === 'dateFromInput') {
      this.dateFromInput = params.date;
    } else if (params.fieldName === 'dateTo') {
      this.dateTo = params.date;
    }
  }

  searchWithData() {
    this.taskService.getTasksDataFromFilter(this.dateFromInput.toString(), this.dateTo.toString()).subscribe(
      response => {
        this.fullResponce = response;
        this.tasks = response.collection;
      });
  }
}
