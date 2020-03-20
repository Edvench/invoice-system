import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task-service';

@Component({
  moduleId:module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any;
  currentPageNumber:number;
  fullResponce:any;

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

 getTasks(){
  this.taskService.getData().subscribe(
    response => {
      this.tasks = response.collection;
      this.fullResponce = response;
      console.log(this.tasks)
    });
 }

 moreTask(currentPage:number){
  this.currentPageNumber = currentPage;
  this.taskService.setCurrentPageValue(this.currentPageNumber).subscribe(
    res=>this.currentPageNumber = res);
    console.log(this.currentPageNumber)
  // console.log(this.currentPageNumber)
 }
 
}
