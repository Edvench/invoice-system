import {Injectable, ComponentFactoryResolver} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Task } from '../Entity/task';
import { Observable } from 'rxjs';


@Injectable()
export class TaskService{
    private apiEndPoint: string;

    constructor(
        private http: HttpClient,
        )
    {
        this.apiEndPoint = environment.domainUrl;
    }

    postData(money:number, title:string, desc:string, date:string){
        var formData = new FormData();

        formData.append('Money', money.toString());
        formData.append('Title', title);
        formData.append('Description', desc);
        formData.append('DateOfTask', date);
        console.log(date);

        ///вытягиваем
        // formData.append('Money', money,'Title',title,'Description',desc,'DateOfTask',date);
        // formData.append('Money', money);
        return this.http.post(this.apiEndPoint + "/task/create", formData); 
    }

    getData(): Observable<any> {
        let result;
        result = this.http.get(this.apiEndPoint + "/task/getTasks")
        return result;
       }
}