import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  moduleId:module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {

  private apiEndPoint: string;

  constructor(private http: HttpClient,) { 
    this.apiEndPoint = environment.domainUrl;
  }

  ngOnInit() {
    this.http.get(this.apiEndPoint + "/task/getTasks").subscribe(
      	(reslt) => {console.log(reslt)});
 }  

}
