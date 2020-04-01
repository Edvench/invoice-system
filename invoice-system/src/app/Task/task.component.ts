import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task-service';
import { Task } from '../Entity/task';
import { DatePickerComponent } from '../Entity/date-picker/date-picker.component';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss',
              '../Styles/global.scss']
})
export class TaskComponent implements OnInit {

  @Input() private titleFromSearch: string;
  private validDateFrom: string;
  private validDateTo: string;
  private tasks: Task[] = [];
  private filterId:string = "";
  private currentPageNumber: number;
  private fullResponce: any;
  private apiEndPoint: string;

  constructor(private http: HttpClient,
    private router: Router,
    private taskService: TaskService,
    private picker: DatePickerComponent) {
    this.apiEndPoint = environment.domainUrl;
  }

  ngOnInit() {

  }

  goCreateTaskLink() {
    this.router.navigate(['createTask']);
  }

  getTasksResponce(currentPage: number): any {
    
    console.log(this.filterId)
    this.currentPageNumber = currentPage + 1;
    this.taskService.getMoreTasksResponce(this.currentPageNumber).subscribe(
      response => {
        this.fullResponce = response;
        response.collection.forEach(element => {
          this.tasks.push(element);
          this.filterId = "all";
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


  onNotify(params):void {
    if (params.fieldName === 'validDateFrom') {
      this.validDateFrom = params.date;
    } else if (params.fieldName === 'validDateTo') {
      this.validDateTo = params.date;
    }
  }

  searchWithData(currentPage: number) {
    this.filterId = "";
    this.currentPageNumber = currentPage + 1;
    if(this.currentPageNumber == 1){
     
      this.tasks = [];
      this.taskService.getTasksDataFromFilter(this.validDateFrom, this.validDateTo,this.currentPageNumber).subscribe(
        response => {
          this.fullResponce = response;
          response.collection.forEach(element => {
            this.tasks.push(element);
            this.filterId = "dateFilter";
          });
          console.log(response);
          console.log(this.tasks);
        });
    }
    else {
      this.taskService.getTasksDataFromFilter(this.validDateFrom, this.validDateTo,this.currentPageNumber).subscribe(
      response => {
        this.fullResponce = response;
        response.collection.forEach(element => {
          this.tasks.push(element);
        });
        console.log(response);
        console.log(this.tasks);
      });}
    
  }
}
