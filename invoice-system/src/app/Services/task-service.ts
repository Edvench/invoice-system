import {Injectable, ComponentFactoryResolver} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Task } from '../Entity/task';


@Injectable()
export class TaskService{
    private apiEndPoint: string;

    constructor(private http: HttpClient)
    {
        this.apiEndPoint = environment.domainUrl;
    }

    createTaskRequest(task:Task):Observable<any>{
        var formData = new FormData();

        formData.append('Money', task.money.toString());
        formData.append('Title', task.title);
        formData.append('Description', task.description);
        formData.append('DateOfTask', task.dateOfTask.toString());
        return this.http.post(this.apiEndPoint + "/task/create", formData); 
    }

    getTasksResponce(): Observable<any> {
        return this.http.get(this.apiEndPoint + "/task/getTasks")
    }

    getMoreTasksResponce(currentPage:number): Observable<any>{
        const params = new HttpParams()
        .set('page', currentPage.toString())

        return this.http.get(this.apiEndPoint + "/task/getTasks?" + params);
    }

    getTasksFromFilter(title:string): Observable<any>{
        const params = new HttpParams()
        .set('title', title)

        return this.http.get(this.apiEndPoint + "/task/getTasks?" + params);
    }

    
}