import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
    private apiEndPoint: string;

    constructor(private http: HttpClient) {
        this.apiEndPoint = environment.domainUrl;
    }

    public createTask(money:number,title:string,description:string,data:string): Observable<any> {
        var formData = new FormData();
        formData.append('Money', money.toString());
        formData.append('Title', title);
        formData.append('Description', description);
        formData.append('DateOfTask', data);
        return this.http.post(this.apiEndPoint + "/task/create", formData);
    }

    public getTasks(currentPage: number,dataFrom?: string, dataTo?: string, title?: string): Observable<any> {
        const params = new HttpParams()
            .set('page', currentPage.toString())
            .set('dataFrom', dataFrom)
            .set('dataTo', dataTo)
            .set('title', title)

        return this.http.get(this.apiEndPoint + "/task/getTasks?" + params);
    }

    ///For all tasks from bd
    // getTasksResponce(): Observable<any> {
    //     return this.http.get(this.apiEndPoint + "/task/getTasks")
    // }

}