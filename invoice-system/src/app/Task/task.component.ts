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
  // @Output() moneyForInput:number;
  // @Output() titleForInput:string;
  // @Output() descriptionForInput:string;

  // @Output() viewTask = new EventEmitter();

  // @Input() dateForInput:Date = new Date();

  tasks: any;

  private apiEndPoint: string;
  

  constructor(private http: HttpClient,
    private router: Router,
    private taskService:TaskService
    ) { 
    this.apiEndPoint = environment.domainUrl;
  }

  ngOnInit() {
    // this.http.get(this.apiEndPoint + "/task/getTasks").subscribe(
    //   	(reslt) => {console.log(reslt)});
 } 
 
 goCreateTaskLink(){
  this.router.navigate(['createTask']);
 }

 getTasks(){
  this.tasks = this.taskService.getData().subscribe(
    response => {this.tasks = response;console.log(this.tasks)}
  );
  
 }
 
}
