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

//  getTasks(){
//   this.taskService.getTasksResponce().subscribe(
//     response => {
//       this.tasks = response.collection;///Добавляем массив тасков c ответа сервера в наш массив тасков
//       this.fullResponce = response;
//       console.log(this.tasks)
//     });
//  }

 getTasks(currentPage:number){
  this.currentPageNumber = currentPage + 1;
  this.taskService.getMoreTasksResponce(this.currentPageNumber).subscribe(
    response => {
      this.fullResponce = response;
      response.collection.forEach(element => {
        this.tasks.push(element);
      });
      console.log(this.tasks)
    });
 }
 
}
