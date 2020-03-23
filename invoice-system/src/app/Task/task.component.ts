import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task-service';
import { Task } from '../Entity/task';

@Component({
  moduleId:module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [];
  currentPageNumber:number;
  fullResponce:any;
  @Input() titleFromSearch:string;

  private apiEndPoint: string;
  

  constructor(private http: HttpClient,
    private router: Router,
    private taskService:TaskService
    ) { 
    this.apiEndPoint = environment.domainUrl;
  }

  ngOnInit() {

 } 
 
 goCreateTaskLink(){
  this.router.navigate(['createTask']);
 }

 getTasksResponce(currentPage:number):any{
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

 getFilterTasksResponce(title:string){
   this.titleFromSearch = title;
  if(this.titleFromSearch !=null)
  {
    this.taskService.getTasksFromFilter(this.titleFromSearch).subscribe(
      response => {
        this.fullResponce = response;
        response.collection.forEach(element => {
          this.tasks.splice(0,this.tasks.length,element);
      });
    console.log(this.tasks);
    });
  }
 }
}
