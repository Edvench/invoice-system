import {Injectable, ComponentFactoryResolver} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class TaskService{
    private apiEndPoint: string;

    constructor(private http: HttpClient)
    {
        this.apiEndPoint = environment.domainUrl;
    }

    postData(money:number, title:string, desc:string, date:string){
        var formData = new FormData();

        formData.append('Money', money.toString());
        formData.append('Title', title);
        formData.append('Description', desc);
        formData.append('DateOfTask', date);
        return this.http.post(this.apiEndPoint + "/task/create", formData); 
    }

    getData(): Observable<any> {
        return this.http.get(this.apiEndPoint + "/task/getTasks")
    }

    setCurrentPageValue(currentPage:number): Observable<any>{
        currentPage = currentPage + 1;
        const params = new HttpParams()
        .set('currentPage',currentPage.toString())
        return this.http.get(this.apiEndPoint + "/task/getTasks?" + params);
    }

    
}