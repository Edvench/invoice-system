import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';



@Injectable()
export class TaskService {
    private apiEndPoint: string;

    constructor(private http: HttpClient) {
        this.apiEndPoint = environment.domainUrl;
    }

    createTask(money:number,title:string,description:string,data:string): Observable<any> {
        var formData = new FormData();
        // if(task.money){task.money = formData.append('Money', task.money.toString());}
        
        formData.append('Money', money.toString());
        formData.append('Title', title);
        formData.append('Description', description);
        formData.append('DateOfTask', data);
        return this.http.post(this.apiEndPoint + "/task/create", formData);
    }

    ///For all tasks from bd
    // getTasksResponce(): Observable<any> {
    //     return this.http.get(this.apiEndPoint + "/task/getTasks")
    // }

    getTasks(currentPage: number,dataFrom?: string, dataTo?: string): Observable<any> {
        const params = new HttpParams()
            .set('page', currentPage.toString())
            .set('dataFrom', dataFrom)
            .set('dataTo', dataTo)

        return this.http.get(this.apiEndPoint + "/task/getTasks?" + params);
    }

    getTasksFromFilter(title: string): Observable<any> {
        const params = new HttpParams()
            .set('title', title)

        return this.http.get(this.apiEndPoint + "/task/getTasks?" + params);
    }

}